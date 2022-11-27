import { Users, Codes } from '../../controllers';
import {  users } from '../../odm';
import jwt from 'jsonwebtoken';
import Redis from 'ioredis';
import { getSecret, getRedisConfig } from '../../utils';
import {USER_NOT_FOUND_ERROR} from '../../utils/constants/error.constants';

const { SECRET } = getSecret();
const { REDIS_DB, REDIS_HOST, REDIS_PORT } = getRedisConfig();
const redis = new Redis({
    port: REDIS_PORT,
    host: REDIS_HOST,
    db:   REDIS_DB,
});
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: 'User not found',
            });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials',
            });
        }
        let token = await redis.get(user._id) || null;
        if (!token) {
            token = jwt.sign(
                {
                    email,
                    id: user._id,
                },
                SECRET,
                { expiresIn: '1d' },
            );
            redis.set(user._id, token, 'ex', 86400);
        }

        return res.status(200).json({
            access_token: token,
            expiresIn:    86400,
        });
    } catch ({ message }) {
        res.status(500).json({ message });
    }
};


export const register = async (req, res) => {
    try {
        const user = new Users(req.body);
        const data = await user.create();
        res.status(200).json(data);
    } catch ({ message }) {
        res.status(400).json({ message });
    }
};

export const forgotPassword = async (req, res) => {
    try {
        const user = new Users(req.body);
        const client = await user.getByEmail(req.body.to);
        if (!client) {
            return res.status(404).json({message: USER_NOT_FOUND_ERROR});
        }
        const data = await user.forgotPassword();

        res.status(200).json(data);
    } catch ({message}) {
        res.status(500).json({ message });
    }
};

export const confirmCode = async (req, res) => {
    try {
        const user = new Users(req.body);
        const codes = new Codes(req.body);
        const token = await  codes.find();
        if (!token) {
            res.status(404).json({message: USER_NOT_FOUND_ERROR});
        }
        const data = await user.confirmCode();

        res.status(200).json(data);
    } catch ({statusCode = 500, message}) {
        res.status(statusCode).json({ message });
    }
};

export const passwordUpdate = async (req, res) => {
    try {
        const {password, email} = req.body;
        const user = new Users();
        const codes = new Codes();

        const data = await user.updateByEmail(email, {password});
        await codes.deleteByEmail(email);
        res.status(200).json(data);
    } catch ({statusCode = 500, message}) {
        res.status(statusCode).json({ message });
    }
};
