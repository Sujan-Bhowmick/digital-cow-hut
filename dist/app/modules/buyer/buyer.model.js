"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buyer = void 0;
const mongoose_1 = require("mongoose");
const buyerSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }
        }
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Buyer = (0, mongoose_1.model)('Buyer', buyerSchema);
