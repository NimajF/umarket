const passport = require('passport');
const User = require('../models/users');
const Cart = require('../models/cart');
const Product = require('../models/products');

const Day = require('../public/javascripts/weekday');



module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}
module.exports.register = async (req, res) => {
    try {
        const { email, username, password} = req.body
        const user = new User({email, username});
        const regUser = await User.register(user, password)//Passport! 
        console.log(regUser)
        res.redirect('/')
    } catch (e) {
        res.redirect('/register')
    }
}

// module.exports.register = async (req, res, next) => {
//     try {
//         const { email, username, password } = req.body;
//         const user = new User({ email, username });
//         const registeredUser = await User.register(user, password);
//         req.login(registeredUser, err => {
//             if (err) return next(err);
//             req.flash('success', 'Welcome to Yelp Camp!');
//             res.redirect('/campgrounds');
//         })
//     } catch (e) {
//         req.flash('error', e.message);
//         res.redirect('register');
//     }
// }

module.exports.renderLogin = (req, res) => {
     res.render('users/login');
}

module.exports.login = (req, res) => {
    // req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/products';
    // delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.renderPurchase = async (req, res) => {
    const product = await Product.findById(req.params.productId).populate('author');
    const date = Day();
    res.render('users/purchase', { product, date })
}

// module.exports.renderCart = async (req, res) => {
//     const product = req.body.product;
//     const user = req.body.user;
//     // const foundUser = await User.findByIdAndUpdate()
//     console.log(product, user)
//     res.render('users/cart', { product })
// } Feature coming Soon!


module.exports.logout = (req, res) => {
    req.logout();
    req.session.destroy();
    // req.flash('success', "Goodbye!");
    res.redirect('/products');
}