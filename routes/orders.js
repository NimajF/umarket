const express = require('express');
const router = express.Router();
const catchAsync = require('../utilities/catchAsync');
const order = require('../models/order');
const orders = require('../controllers/orders');
const { isLoggedIn } = require('../middleware')


router.get('/purchase/:productId', isLoggedIn, orders.renderPurchase)    
// router.get('/purchased/success', orders.renderPurchasedProduct)
router.post('/purchased', orders.purchaseProduct)
// router.post('/cart', isLoggedIn, orders.renderCart)
router.get('/purchased/:orderId', isLoggedIn, catchAsync(orders.orderSuccess)) //isloggedIn just to test

module.exports = router;