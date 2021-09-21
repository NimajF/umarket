const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utilities/catchAsync');
const User = require('../models/users');
const users = require('../controllers/users');
const { isLoggedIn } = require('../middleware')

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureRedirect: '/login' }), users.login)


router.get('/purchase/:productId', users.renderPurchase)    

router.post('/purchased', users.purchaseProduct)
// router.post('/cart', isLoggedIn, users.renderCart)

router.get('/logout', users.logout)//"Passport Method"

module.exports = router;