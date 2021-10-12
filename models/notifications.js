const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    title: String,
    body: String,
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    messageAuthor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Notification", notificationSchema);