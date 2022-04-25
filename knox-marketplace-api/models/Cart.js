const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        products: [
            {
                productId: {
                    type: String,
                },
            }
        ],
    },
    { timestamp: true }
);

module.exports = mongoose.model("Cart", CartSchema);