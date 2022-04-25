const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{type: String, required: true, unique: true},
        desc: {type: String, required: true},
        img: {type: Array, required: true },
        categories: {type: Array, required: true },
        price: {type: Number, required: true },
    },
    { timestamp: true }
);

module.exports = mongoose.model("Product", ProductSchema);