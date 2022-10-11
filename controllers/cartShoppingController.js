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
            email,
            name,
            salePrice,
            image,
            quantity
        } = req.body;

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
        let listCart= await Cart.findAll()
        if(listCart.length > 0) {
          await listCart.map(p => Cart.findOrCreate({
            where: {
                name: p.name
              }
          }))
        }
        else if (notFull) {
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
    const {email} = req.query;
    const inCart = Cart.findAll({where: {
            email
        }});

    if (!!inCart) {
        Cart.destroy({where: {
                email
            }});
    }
    return
    } catch (error) {
        console.log(error.mesage);
        res.status(400).send("failed")
    }
}

const getCartShopping = async (req, res) => {
    try {
        const {email} = req.query;
        /* Nos fijamos si el usuario ya tiene productos en el carrito */
        console.log(email);
        if (email === undefined || email === null || email.length === 0) 
            return res.status(404).send("Not found")

        

        const allProductsCart = Cart.findAll({where: {
                email
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
