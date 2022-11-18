const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema(
    {
        senderId: {
            type:     mongoose.SchemaTypes.ObjectId,
            ref:      'users',
            required: true,
        },
        receiverId: {
            type:     mongoose.SchemaTypes.ObjectId,
            ref:      'users',
            required: true,
        },

    },
    { timestamps: true },
);

const conversation = mongoose.model('Conversation', ConversationSchema);

export {
    conversation,
};
