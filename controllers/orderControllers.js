const { Order } = require('../server/database/db');

const howManyPayments = async (req, res) => {
    const { id } = req.query;
    const isANumber = /^([0-9])*$/;
    if (!id || !isANumber.test(id)) return res.status(400).send('Problem with the ID');
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
    if (!id || !isANumber.test(id)) return res.status(400).send('Problem with the ID');
    try {
        let status = req.query.status ? req.query.status : "Completado"
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

module.exports = {
    howManyPayments,
    getAllOrders
}