const { Product, Cart } = require("../server/database/db");

const addProductCart = async (req, res) => {
    try {
        const { email, name, salePrice, image, quantity } = req.body;

        /* Nos fijamos si todos los campos vienen con info */
        const notFull =
            name !== "" &&
            email !== "" &&
            image !== "" &&
            salePrice !== "" &&
            quantity !== "";

        const fullCart = {
            email,
            name,
            salePrice,
            image,
            quantity,
            subTotal: salePrice * quantity,
        };

        /* Si nos envian algo y no esta en el carrito lo agregamos */
        if (notFull) {
            Cart.create(fullCart).then((resp)=>{res.json(resp);});
            return fullCart;
        }
    } catch (error) {
        console.log(error.message);
    }
};

const cleanCartShopping =async (req, res) => {
            /* Nos fijamos si el producto ya esta en el carrito */
        const inCart = Cart.findAll({ where:{email}  });

        if (!!inCart) {
            Cart.destroy({
                where: {
                    email,
                },
            });
        }
}

const getCartShopping = async (req, res) => {
    try {
        const { email } = req.query;
        /* Nos fijamos si el usuario ya tiene productos en el carrito */
        const allProductsCart = await Cart.findAll({ where:{email} });
        if (allProductsCart === null) return;
        res.json(allProductsCart);
        return
    } catch (error) {
        console.log(error.mesage);
        res.status(400).send("failed");
    }
};

module.exports = { addProductCart, getCartShopping, cleanCartShopping };
