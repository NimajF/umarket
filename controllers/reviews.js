const { findByIdAndDelete } = require('../models/products');
const Product = require('../models/products');
const Review = require('../models/reviews');

module.exports.createReview = async (req, res) => {
    const product = await Product.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    product.reviews.push(review);
    console.log(product.reviews)
    await review.save();
    await product.save();
    res.redirect(`/products/${product._id}/show`);
};

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); // find the product review and pull that review from that product reviews
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/products/${id}/show`);
}