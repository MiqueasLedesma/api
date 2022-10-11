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
<<<<<<< HEAD
        const {
            email,
            name,
            salePrice,
            image,
            quantity
        } = req.body;
=======
        const { email, name, salePrice, image, quantity } = req.body;
>>>>>>> origin/master

        /* Nos fijamos si todos los campos vienen con info */
        const notFull = name !== "" && email !== "" && image !== "" && salePrice !== "" && quantity !== "";

        const fullCart = {
            email,
            name,
            salePrice,
            image,
            quantity,
            subTotal: salePrice * quantity
        };

        /* Si nos envian algo y no esta en el carrito lo agregamos */
        if (notFull) {
<<<<<<< HEAD
            Cart.create(fullCart).then((resp) => {
                res.json(resp);
            });
=======
            Cart.create(fullCart).then((resp)=>{res.json(resp);});
>>>>>>> origin/master
            return fullCart;
        }
    } catch (error) {
        console.log(error.message);
    }
};

<<<<<<< HEAD
const cleanCartShopping = async (req, res) => { 
    const inCart = Cart.findAll({where: {
            email
        }});

    if (!! inCart) {
        Cart.destroy({where: {
                email
            }});
    }
=======
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
>>>>>>> origin/master
}

const getCartShopping = async (req, res) => {
    try {
        const {email} = req.query;
        /* Nos fijamos si el usuario ya tiene productos en el carrito */
        console.log(email);
<<<<<<< HEAD
        if (email === undefined || email === null || email.length === 0) 
            return res.status(404).send("Not found")

        

        const allProductsCart = Cart.findAll({where: {
                email
            }}).then(list => res.json(list));
=======
        if(email === undefined || email === null || email.length === 0) return res.status(404).send("Not found")
        
        const allProductsCart = Cart.findAll({ where:{email} }).then(list=>res.json(list));
>>>>>>> origin/master
        return allProductsCart

    } catch (error) {
        console.log(error.mesage);
        res.status(400).send("failed")
    }
};

<<<<<<< HEAD


module.exports = {
    addProductCart,
    getCartShopping,
    cleanCartShopping,
    getAllCartShopping
};
=======
module.exports = { addProductCart, getCartShopping, cleanCartShopping };
>>>>>>> origin/master
