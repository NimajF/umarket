const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categories = require('../seeds/categories')

const ProductSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    images: [
        {
            url: String,
            filename: String
        }
    ],
    categories: String,
    author: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

ProductSchema.post('findOneAndDelete', async function (doc) { //Mongoose middleware to delete reviews inside deleted Product
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Product', ProductSchema);