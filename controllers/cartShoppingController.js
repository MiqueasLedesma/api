const { Product, Cart } = require("../server/database/db");

const addProductCart = async (req, res) => {
    try {
        const { email, name, salePrice, image, quantity } = req.body;

        /* Nos fijamos si tenemos el producto */
        const productCart = await Product.findOne({ name });
        console.log(productCart);

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
        /* Nos fijamos si el producto ya esta en el carrito */
        const inCart = await Cart.findOne({ email });

        if (inCart) {
            Cart.destroy({
                where: {
                    email,
                },
            });
        }

        /* Si nos envian algo y no esta en el carrito lo agregamos */
        if (notFull && !inCart) {
            const newCart = Cart.create(fullCart);
            res.json(newCart);
        }
    } catch (error) {
        console.log(error.message);
    }
};

const getCartShopping = async (req, res) => {
    try {
        const { email } = req.query;
        /* Nos fijamos si el usuario ya tiene productos en el carrito */
        const allProductsCart = await Cart.findOne({ email });
        if (allProductsCart === null) return;
        res.json(allProductsCart);
    } catch (error) {
        console.log(error.mesage);
        return res.status(400).send("failed");
    }
};

module.exports = { addProductCart, getCartShopping };
