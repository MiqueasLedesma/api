const { Review } = require('../server/database/db');

const postReview = async (req, res) => {
    const { productId, stars, detail, userId } = req.body;
    if (!productId || !stars || !detail || !userId) return res.status(400).send('All camps are obligatories!');
    const repetidos = await Review.findAll({
        where: {
            userId,
            productId
        }
    })
    if (!repetidos[0]) {
        try {
            await Review.create({
                productId,
                userId,
                detail,
                stars
            })
                .then(r => res.send('Review has been created!'))
        } catch (error) {
            console.log(error.message);
            return res.status(400).send(error.message);
        };
    } else {
        return res.status(400).send('This user already has a review for this product!')
    };
};

const getReviews = async (req, res) => {
    const { productId } = req.query;
    const isANumber = /^([0-9])*$/;
    if (!isANumber.test(productId)) return res.status(400).send('Id must be a number!');
    let page = !isANumber.test(req.query.page) ? 0 : req.query.page;
    try {
        await Review.findAndCountAll({
            where: {
                status: true
            },
            limit: 4,
            offset: page * 4
        })
            .then(r => res.send({
                content: r.rows,
                totalPage: Math.ceil(r.count / (4 * 2))
            }));
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    };
};

const changeReview = async (req, res) => {
    const { id, detail, stars } = req.body;
    const isANumber = /^([0-9])*$/;
    if (!id || !detail || !stars) return res.status(400).send('All camps are obligatories!');
    if (id && !isANumber.test(id)) return res.status(400).send('Id must be a number!');
    try {
        await Review.update({
            detail,
            stars
        }, {
            where: {
                id
            }
        })
            .then(r => res.send('Review has been updated!'));
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    };
};

const deleteReview = async (req, res) => {
    const { id } = req.query;
    const isANumber = /^([0-9])*$/;
    if (id && !isANumber.test(id)) return res.status(400).send('Id must be a number!');
    try {
        await Review.update({
            status: false
        }, {
            where: {
                id
            }
        })
            .then(r => res.send('Review has been deleted!'));
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    };
};

const revertDeleteReview = async (req, res) => {
    const { id } = req.query;
    const isANumber = /^([0-9])*$/;
    if (id && !isANumber.test(id)) return res.status(400).send('Id must be a number!');
    try {
        await Review.update({
            status: true
        }, {
            where: {
                id
            }
        })
            .then(r => res.send('Review has been updated!'))
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    };
};

const getAllDeletedReviews = async (req, res) => {
    const isANumber = /^([0-9])*$/;
    let page = !isANumber.test(req.query.page) ? 0 : req.query.page;
    try {
        await Review.findAndCountAll({
            limit: 8,
            offset: page * 8,
            where: {
                status: false
            }
        })
            .then(r => res.send({
                content: r.rows,
                totalPage: Math.ceil(r.count / (8 * 2))
            }))
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    };
};


module.exports = {
    postReview,
    getReviews,
    changeReview,
    deleteReview,
    revertDeleteReview,
    getAllDeletedReviews
};