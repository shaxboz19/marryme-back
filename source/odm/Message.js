const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: String,
        },
        sender: {
            type: String,
        },
        text: {
            type: String,
        },
        type: {
            type: String,
        },
    },
    { timestamps: true },
);

const message = mongoose.model('Message', MessageSchema);
export {
    message,
};
