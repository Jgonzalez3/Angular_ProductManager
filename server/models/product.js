require("../config/mongoose")();

const mongoose = require("mongoose");
module.exports = () =>{
    const ProductSchema = new mongoose.Schema({
        title: {type: String, required:[true, "Title Required"], minlength:[4, "Name must have at least 4 characters"]},
        price: {type: Number, required:[true, "Price Required"]},
        image: {type: String},
    }, {timestamps: true})
    Product = mongoose.model('Product', ProductSchema);
}