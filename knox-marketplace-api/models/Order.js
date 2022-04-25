const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Order", OrderSchema);