const { User, Product, Image, Category, Brand } = require('../server/database/db');


const postFavorite = async (req, res) => {
    try {
        const { idUser, idProduct } = req.body
        const user = await User.findByPk(idUser);
        const product = await Product.findByPk(idProduct)
        await user.addProduct(product)
        
        return res.send({message: "Favorite added"})
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    };
};

const getAllFavorites = async (req,res) => {
    try {
        const { id } = req.query
        if(id == "undefined") return res.send({products: []})
        
        //if(id == "undefined") console.log("undefined")
        //console.log(id)
        const favorite = await User.findOne({
            where: { id },
            include: {
                model: Product,
                through: {
                    attributes: []
                  },
                include: [
                        Category,
                        Brand,
                        Image
                    ] 
          }});
        return res.send(favorite)
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    };
}

const getDeleteFavorites = async (req,res) => {
    try {
        const { idUser, idProduct } = req.body
        const user = await User.findByPk(idUser);
        const product = await Product.findByPk(idProduct)
        response = await user.removeProduct(product)
        
        return res.send({id:idProduct})
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    };
}

module.exports = {
    postFavorite, 
    getAllFavorites,
    getDeleteFavorites
};