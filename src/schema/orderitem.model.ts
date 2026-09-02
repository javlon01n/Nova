import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";

const orderItemSchema = new Schema(
    {
        itemQuantity: {
            type: Number,
            required: true,
        },

        itemPrice: {
            type: Number,
            required: true,
        },

        orderId: {
            type: Schema. Types. ObjectId,
             ref: "Order"
            },

        productId: {
            type: Schema. Types. ObjectId,
            ref: "Product"
        },

        itemStatus: {
            type: String,
            enum: OrderStatus,
        },

        itemCancelReason: {
            type: String,
        },
    },
    { timestamps: true, collection: "orderItems" }
);

export default mongoose.model ("OrderItem", orderItemSchema);