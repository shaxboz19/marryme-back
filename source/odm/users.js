import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import {getSalt} from '../utils';
const { SALT } = getSalt();

const userSchema = new mongoose.Schema({
    name: {
        first: {
            type:      String,
            required:  true,
            trim:      true,
            minlength: 3,
        },
        last: {
            type:      String,
            required:  true,
            trim:      true,
            minlength: 3,
        },
    },
    email: {
        type:      String,
        required:  true,
        trim:      true,
        unique:    true,
        lowercase: true,
        validate:  [ validator.isEmail, 'Invalid email' ],
    },
    phone: {
        type:      String,
        required:  true,
        minlength: 12,
        trim:      true,
        unique:    true,
        index:     'text',

    },
    password: {
        type:      String,
        required:  true,
        minlength: 8,
        trim:      true,
    },
    gender: {
        type: String,
        enum: [ 'M', 'm', 'F', 'f' ],
    },
    role: {
        type: String,
        enum: [ 'admin', 'user' ],
    },
    favorite:  [{type: Schema.Types.ObjectId, ref: 'Statement'}],
    whiteList: {
        type: 'array',
    },
    blackList: {
        type: 'array',
    },

    nickname: {
        type:      'string',
        minLength: 3,
        maxLength: 12,
    },

    aboutMe: {
        type: 'string',
    },
    isPublic: {
        type: 'boolean',
    },
    avatar: {
        type: 'string',
    },
    age: {
        type: 'number',
    },
    address: {
        type: 'string',
    },
    workplace: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
}, {
    timestamps: true,

});

// hash password
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(SALT);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;

        return next();
    } catch (error) {
        return next(error);
    }
});

// virtual field
userSchema.virtual('fullName').get(function() {
    return `${this.name.first} ${this.name.last}`;
});

// compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);

        return isMatch;
    } catch (error) {
        throw new Error(error);
    }
};

const users = mongoose.model('users', userSchema);

export {
    users,
};
