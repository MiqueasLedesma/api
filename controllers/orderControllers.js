const { Order, OrderDetail } = require('../server/database/db');

const howManyPayments = async (req, res) => {
    const { id } = req.query;
    const isANumber = /^([0-9])*$/;
    if (!id || !isANumber.test(id)) return res.status(400).send('ID debe ser un numero!');
    try {
        await Order.findAll({
            where: {
                userId: id
            }
        })
            .then(r => {
                let total = r.length === 0 ? 'Aun no se realizaron compras' : r.length;
                return res.send(total);
            });
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    };
};

const getAllOrders = async (req, res) => {
    const { id } = req.query;
    const isANumber = /^([0-9])*$/;
    if (!id || !isANumber.test(id)) return res.status(400).send('ID debe ser un numero!');
    try {
        let status = req.query.state ? req.query.state : "Completado"
        let page = !isANumber.test(req.query.page) ? 0 : req.query.page;
        await Order.findAndCountAll({
            where: {
                userId: id,
                status: status
            },
            limit: 5,
            offset: page * 5,
            order: [
                ['id', 'DESC']
            ],
            include: [
                OrderDetail,
            ]
        })
            .then(r => res.send({
                content: r.rows,
                totalPage: Math.ceil(r.count / (5 * 2))
            }));
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    };
};

const createOrder = async (req, res) => {
    const { total, discount, subTotal, status, userId, sucursalId, quantity, productsId } = req.body;
    if (!quantity || !total || !discount || !subTotal || !status || !userId || !Object.keys(productsId)[0]) return res.status(400).send('Faltan Datos!');
    try {
        await Order.create({
            total,
            discount,
            subTotal,
            status,
            userId,
            sucursalId,
            quantity,
            productsId: JSON.stringify(productsId)
        })
            .then(r => res.send('Orden Creada!'));
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    };
};

const getOrderDetail = async (req, res) => {
    const { id } = req.query;
    const isANumber = /^([0-9])*$/;
    if (!id || !isANumber.test(id)) return res.status(400).send('El ID debe ser un numero!');
    try {
        await OrderDetail.findByPk(id).then(r => res.send(r))
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    };
};

const updateOrder = async (req, res) => {
    const { id, status } = req.query;
    const isANumber = /^([0-9])*$/;
    if (!id || !isANumber.test(id)) return res.status(400).send('El id debe ser un numero!');
    if (typeof (status) !== 'string') return res.status(400).send('El estado debe ser una cadena de texto');
    try {
        await Order.update({
            status
        }, {
            where: {
                id
            }
        })
            .then(r => res.send('Estado actualizado correctamente!'));
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    }
}


module.exports = {
    howManyPayments,
    getAllOrders,
    createOrder,
    getOrderDetail,
    updateOrder
}



// {
//     "name": "venex",
//     "address": "Prigles",
//     "latitude": "11.22",
//     "longitude": "11.22"
// }


// {
//     "total": "200",
//     "discount": "0",
//     "subTotal": "150",
//     "status": "Preparando",
//     "userId": "2",
//     "sucursalId": "1",
//     "quantity": "1",
//     "productsId": {
//         "cart": "aca iria la info del carro"
//     }
// }
