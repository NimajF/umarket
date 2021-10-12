const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    reputation: { type: Number, default: 0 },
    totalSoldProducts: { type: Number, default: 0 },
    notifications: [{type: Schema.Types.ObjectId, ref: 'User'}],
    cart: {
        items: [{
            productId: {
                type: mongoose.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }],
        totalPrice: Number
    }
})

UserSchema.plugin(passportLocalMongoose);// adds username and password, and unique
module.exports = mongoose.model('User', UserSchema);