const mongoose = require('mongoose');
import validator from 'validator';

const CodesSchema = new mongoose.Schema(
    {
        email: {
            type:      String,
            required:  true,
            trim:      true,
            unique:    true,
            lowercase: true,
            validate:  [ validator.isEmail, 'Invalid email' ],
        },
        code: {
            type:     'string',
            required: true,
            trim:     true,

        },
        createdAt: { type: Date, expires: 10, default: Date.now},
    },
    { timestamps: true },
);

const codes = mongoose.model('Codes', CodesSchema);
export {
    codes,
};
