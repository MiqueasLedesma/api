const axios = require('axios');
const { ACCESS_TOKEN } = process.env;
const { Order, User } = require('../server/database/db');

const mercadopagoApi = "https://api.mercadopago.com/checkout/preferences";

const { sendEmail } = require("./emailController")
const { endOrder } = require("../emailtemplates/endOrder")

async function getPaymentLink(req, res) {

    const { tittle, description, categaryName, quantity, salePrice } = req.body;


    // if (!tittle || !description || !categaryName || !quantity || !salePrice) return res.send('Faltan Datos!')

    try {
        const preferences = {
            payer_email: "test_user_42159412@testuser.com", //usuario comprador
            items: [
                {
                    title: tittle,
                    description: description,
                    category_id: categaryName,
                    quantity,
                    unit_price: salePrice
                },
            ],
            back_urls: {
                failure: "/final-shopping",
                pending: "/",
                success: "https://techstore-ruby.vercel.app/"
            }
        };

        const payment = await axios.post(mercadopagoApi, preferences, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}` //usario vendedor
            }
        });

        return res.status(200).json({ data: payment.data })
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    }

};

const getPaymentCartLink = async (req, res) => {
    const { cart, userId } = req.body;

    if (!cart || !userId) return res.status(400).send('Faltan Datos!');

    console.log(req.body);

    try {

        const info = cart.map(e => {
            return {
                title: e.name,
                description: e.description,
                category_id: e.category.name,
                quantity: Number(e.quantity),
                unit_price: Number(e.salePrice)
            }
        });

        console.log(info)

        const preferences = {
            payer_email: "test_user_42159412@testuser.com",
            items: info,
            external_reference: userId,
            notification_url: "https://techstore123.herokuapp.com/payments/notification",
            back_urls: {
                failure: "https://techstore-ruby.vercel.app/final-shopping",
                pending: "https://techstore-ruby.vercel.app/",
                success: "https://techstore-ruby.vercel.app/"
            }
        };

        const user = await User.findOne({where:{id:Number(userId)}})
        await sendEmail(endOrder(user.email))

        const payment = await axios.post(mercadopagoApi, preferences, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}` //usario vendedor
            }
        });

        return res.status(200).json({ data: payment.data })

    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    };
};

async function getPaymentNotification(req, res) {
    const { data } = req.body
    // console.log("query ===>", req.query)
    // const paymentStatus = await axios.get(`https://api.mercadopago.com/v1/payments/${data.id}`)
    // console.log("data ====>", data)

    if (data) {
        const paymentStatus = await axios.get(`https://api.mercadopago.com/v1/payments/${data.id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}` //usario vendedor
            }
        })
        console.log(paymentStatus)

        const operationInfo = {
            id: paymentStatus.data.id,
            userId: paymentStatus.data.external_reference,
            notification_url: paymentStatus.data.notification_url,
            statement_descriptor: paymentStatus.data.statement_descriptor,
            status: paymentStatus.data.status,
            status_detail: paymentStatus.data.status_detail,
            transaction_amount: paymentStatus.data.transaction_amount,
        }

        //const user = await User.findOne({where:{id:operationInfo.userId}})
        //await sendEmail(endOrder(user.email))

        if (operationInfo.status === 'approved') {
            try {
                const order = await Order.update({
                    status: 'approved'
                }, {
                    where: {
                        userId: operationInfo.userId,
                        status: 'Preparando'
                    }
                })
                
            } catch (error) {
                console.log(error.message);
                return res.status(400).send(error.message);
            };
        };

        if (operationInfo.status === 'rejected') {
            try {
                await Order.update({
                    status: 'rejected'
                }, {
                    where: {
                        userId: operationInfo.userId,
                        status: 'Preparando'
                    }
                })
            } catch (error) {
                console.log(error.message);
                return res.status(400).send(error.message);
            };
        };

        if (operationInfo.status === 'in_process') {
            try {
                await Order.update({
                    status: 'in_process'
                }, {
                    where: {
                        userId: operationInfo.userId,
                        status: 'Preparando'
                    }
                })
            } catch (error) {
                console.log(error.message);
                return res.status(400).send(error.message);
            };
        };


        console.log(operationInfo)
        return res.status(200).json(data)
    } else {
        console.log("no existe data")
        return res.status(400).send("no existe data")
    }
}

module.exports = {
    getPaymentLink,
    getPaymentCartLink,
    getPaymentNotification
};