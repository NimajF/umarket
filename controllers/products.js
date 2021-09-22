const Product = require('../models/products');
const categories = require('../seeds/categories')

const Day = require('../public/javascripts/weekday');

module.exports.homeProducts = async (req, res)  => {
    const products = await Product.find({});
    const date = Day();
    // && date[0] === 'November'
    if ((date[3] === 'Friday' && date[0] === 'November')) {
        products.price = Math.round((products.price * 20) / 100)
        return res.render('homepage/home', { products, categories, date });
    }
    res.render('homepage/home', { products, categories, date });
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