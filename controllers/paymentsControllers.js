const axios = require('axios');
const { ACCESS_TOKEN } = process.env;

const mercadopagoApi = "https://api.mercadopago.com/checkout/preferences";

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
                failure: "/failure",
                pending: "/pending",
                success: "https://google.com.ar"
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
    const { cart } = req.body;
    console.log(req.params, req.body, req.query);
    
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

    

        const preferences = {
            payer_email: "test_user_42159412@testuser.com",
            items: info,
            back_urls: {
                failure: "/failure",
                pending: "/pending",
                success: "https://google.com.ar"
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
        res.status(400).send(error.message);
    };
};

module.exports = {
    getPaymentLink,
    getPaymentCartLink
};