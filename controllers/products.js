const { populate } = require('../models/products');
const Product = require('../models/products');
const categories = require('../seeds/categories')

module.exports.homeProducts = async (req, res)  => {
    const products = await Product.find({})
    res.render('homepage/home', { products, categories });
};
module.exports.showCategoryProducts = async (req, res) => {
    const { categoryName } = req.params;
    const products = await Product.find({categories: categoryName})
    res.render('products/CategoryIndex/categoryindex', { products, categoryName })
    
};

module.exports.renderCreateForm = (req, res) => {
    res.render('products/create', {categories})
};
module.exports.createProduct = async (req, res) => {
    const product = new Product(req.body.product) // as product[""] html ejs file
    product.images = req.files.map(f => ({url: f.path, filename: f.filename}));
    product.author = req.user._id
    await product.save();
    res.redirect(`/products/${product._id}/show`)
}



module.exports.showProduct = async (req, res) =>{
    const foundProduct = await Product.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author'); //Populating the author of each review, and the product author.
    // console.log(foundProduct)
    res.render('products/show', { foundProduct })
};

module.exports.renderEditForm = async (req, res) => {
    const foundProduct = await Product.findById(req.params.id);
    res.render('products/edit', { foundProduct, categories });
}

module.exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findOneAndDelete(id);
    res.redirect('/products')
}