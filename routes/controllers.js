const { Product, User, Brand, Category, Image } = require('../server/database/db');
const { uploadImage } = require('../utils/cloudinary')


// ===>>>> Controlador para todos los productos  falta por id y por name
const getProducts = async (req, res) => {

    try {
        const allProduct = await Product.findAll();
        console.log(allProduct);
        return res.send(allProduct);
    } catch (error) {
        console.log(error)
        res.send('failed!')
    }
};

// ============>>>>>>>>>Post de un producto

const postProduct = async (req, res)=>{

    const {name, description, purchasePrise, salePrice, stock, status, brand, image, category} = req.body;
    try {
        if(!name || !description || !purchasePrise || !salePrice || !stock || !status){
            return res.send('need more data!')
        }

        let allProduct = await Product.findAll()
        let aProduct = allProduct.find(e => e.name.toLowerCase() === name.toLowerCase() && e.status === status)

        if (aProduct){
            return res.send('the product exist!')
        }

        let newProduct = await Product.create({
            name,
            description,
            purchasePrise,
            salePrice,
            stock,
            status,
            brand, 
            image,
            category
        })
            let brandDb = await Brand.findAll({
                where:{ name: brand }
            })  //===============>>>>>>>>>> image presenta problemas se sugiere q este dento de la entidad producto
            /* let imageDb = await Image.findAll({
               where:{ name: image}
            }) */
            let categoryDb = await Category.findAll({
                where: { name: category }
            })
        
            newProduct.addBrand(brandDb)    
           // newProduct.addImage(imageDb)
            newProduct.addCategory(categoryDb)

        console.log(newProduct)
        res.send(newProduct)
        return ;

        
    } catch (error) {
        console.log(error)
    }


};

const postImage = async (req, res) => {
    try {
        //console.log(req.files.image.tempFilePath)
        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath)
            res.status(200).send(result)
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports = { getProducts, postProduct, postImage };