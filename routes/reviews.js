const express = require('express');
const router = express.Router(({ mergeParams: true }));// because we dont have access to params, express router keeps parame separate
const catchAsync = require('../utilities/catchAsync')
const { isLoggedIn, isReviewAuthor } = require('../middleware')

const Review = require('../models/reviews');
const reviews = require('../controllers/reviews');

router.post('/', isLoggedIn, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))
module.exports = router;