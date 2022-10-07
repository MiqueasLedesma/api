const {Op} = require('sequelize');
const { Product, Cart } = require('../server/database/db');

const addProductCart = async(req, res)=>{
 const {email, name, salePrice, image, quantity} = req.params;

  /* Nos fijamos si tenemos el producto */
  const productCart = await Product.findOne({ name });
  console.log(productCart);

  /* Nos fijamos si todos los campos vienen con info */
  const notFull = name !== "" && email !== "" && image !== "" && salePrice !== "" && quantity !== ""

  /* Nos fijamos si el producto ya esta en el carrito */
  const inCart = await Cart.findOne({ name });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
if (notFull && !inCart) {
    const newProductInCart = new Cart({ name, img, price, amount: 1 });

    /* Y actualizamos la prop inCart: true en nuestros productos */
    await Product.findByIdAndUpdate(
      estaEnProducts?._id,
      { inCart: true, name, img, price },
      { new: true }
    )
      .then((product) => {
        newProductInCart.save();
        res.json({
          mensaje: `El producto fue agregado al carrito`,
          product,
        });
      })
      .catch((error) => console.error(error));

    /* Y si esta en el carrito avisamos */
  } else if (inCart ) {
    res.status(400).json({
      mensaje: "El producto ya esta en el carrito",
    });
  }
};

module.exports = addProductCart;