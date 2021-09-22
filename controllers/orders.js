const passport = require('passport');
const User = require('../models/users');
const Cart = require('../models/cart');
const Product = require('../models/products');
const Order = require('../models/order');

const Day = require('../public/javascripts/weekday');

module.exports.renderPurchase = async (req, res) => {
    const product = await Product.findById(req.params.productId).populate('author');
    const date = Day();
    // const method = shippingMethod() 
    res.render('users/purchase', { product, date })
}

module.exports.purchaseProduct = async (req, res) => {
    const { userId } = req.body.product;
   
    const { id, name, country, address } = req.body.user;
    const { method, } = req.body.shipping;
    
    const productAuthor = await User.findById(userId);

    const order = new Order({
        orderUser: req.user._id,
        method: method,
        country: country,
        address: address,
        name: name
    })

    productAuthor.reputation += 100;
    await order.save();
    await productAuthor.save(); //When the user buys a product, the autor of the product gets +100 of reputation
    console.log(productAuthor.reputation)
    res.redirect(`/order/purchased/${order._id}`)
    
    
        
    
    
    
    
    
}

module.exports.orderSuccess = async (req, res) => {
    const { orderId } = req.params;
    const foundOrder = await Order.findById(orderId);
    if (req.user.equals(foundOrder.orderUser)){ // If the current logged user ID is equals to the user ID that made the order, get the response
        res.send('asdsa') 
    } else {
        res.send('No')
    }

    
}
