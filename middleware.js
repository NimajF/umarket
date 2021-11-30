const { productSchema } = require('./schemas.js');
const ExpressError = require('./utilities/ExpressError')
const Product = require('./models/products');
const Review = require('./models/reviews');
const products = require('./models/products');


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        // req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body);
    console.log(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

module.exports.isProductAuthor = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    if (!product.author.equals(req.user._id)){ // if product author is not the same as that user logged in, redirect
        return res.redirect(`/products/${id}/show`);
    }
    next();
}
module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId)
    if (!review.author.equals(req.user._id)){ // if review author is not the same as that user logged in, redirect
        return res.redirect(`/products/${id}/show`);
    }
    next();
}