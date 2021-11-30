const express = require('express');
const app = express();
const router = express.Router();
const catchAsync = require('../utilities/catchAsync')
const { isLoggedIn, validateProduct, isProductAuthor } = require('../middleware')

const Product = require('../models/products');
const products = require('../controllers/products');

//Image upload
const multer = require('multer');
const { storage } = require('../Cloudinary')
const upload = multer({ storage });


const { application } = require('express');
const { route } = require('./users');

router.route('/') 
    .get(catchAsync(products.homeProducts))
    .post(isLoggedIn, upload.array('image'), catchAsync(products.createProduct))




router.get('/newProduct', isLoggedIn, products.renderCreateForm);

router.get('/:categoryName', catchAsync(products.showCategoryProducts));
// router.post('/category/:categoryName/categoryindex', isLoggedIn, validateProduct, catchAsync(products.createProduct))


    

router.route('/:id/show')
    .get(catchAsync(products.showProduct))
    .put(isLoggedIn, isProductAuthor, catchAsync(products.updateProduct))
    .delete( isLoggedIn, isProductAuthor, catchAsync(products.deleteProduct))

router.route('/:id/edit')
    .get(isLoggedIn, isProductAuthor, catchAsync(products.renderEditForm))

module.exports = router;
