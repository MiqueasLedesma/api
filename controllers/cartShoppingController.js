const {Product, Cart} = require("../server/database/db");

const getAllCartShopping = async (req, res) => {
  try {
      await Cart.findAll().then(r => res.send(r));
  } catch (error) {
      console.log(error);
      return res.status(400).send('failed!');
  }
};

const addProductCart = async (req, res) => {
    try {
        const {
            name,
            salePrice,
            image,
            quantity
        } = req.body;

        /* Nos fijamos si todos los campos vienen con info */
        const notFull = name !== "" && email !== "" && image !== "" && salePrice !== "" && quantity !== "";

        const fullCart = {
            name,
            salePrice,
            image,
            quantity,
            subTotal: salePrice * quantity
        };

        /* Si nos envian algo y no esta en el carrito lo agregamos */
        if (notFull) {
            Cart.create(fullCart).then((resp) => {
                res.json(resp);
            });
            return fullCart;
        }

    } catch (error) {
        console.log(error.message);
    }
};

const cleanCartShopping = async (req, res) => { 
  
  try{
    const {userId} = req.query;
    const inCart = Cart.findAll({where: {
            userId
        }});

    if (!!inCart) {
        Cart.destroy({where: {
                userId
            }});
    }
    return res.send("success");
    } catch (error) {
        console.log(error.mesage);
        res.status(400).send("failed")
    }
}

const getCartShopping = async (req, res) => {
    try {
        const {userId} = req.query;
        /* Nos fijamos si el usuario ya tiene productos en el carrito */
        console.log(userId);
        if (userId === undefined || userId === null || userId.length === 0) 
            return res.status(404).send("Not found")

        

        const allProductsCart = Cart.findAll({where: {
                userId
            }}).then(list => res.json(list));
        return allProductsCart

    } catch (error) {
        console.log(error.mesage);
        res.status(400).send("failed")
    }
};



module.exports = {
    addProductCart,
    getCartShopping,
    cleanCartShopping,
    getAllCartShopping
};
