const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a product name'],
        trim: true,
        maxlength: [100, 'Name can not be more than 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a product price'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    company: {
        type: String,
        enum:{
            values:['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
        //enum: ['Ikea', 'liddy', 'caressa', 'marcos'],
    },
});

module.exports = mongoose.model('Product',productSchema);