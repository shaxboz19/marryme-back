import {Users} from '../../controllers';
// eslint-disable-next-line no-unused-vars
import Jwt from 'jsonwebtoken';

export const getUser = async (req, res) => {
    try {
        const users = new Users();
        // eslint-disable-next-line no-unused-vars
        const token =  req.get('Authorization').split(' ');
        const {id} = Jwt.decode(token[ 1 ]);
        const data = await users.getById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const whiteList = async (req, res) => {
    try {
        const users = new Users();
        const data = await users.whiteList(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const blackList = async (req, res) => {
    try {
        const users = new Users();
        const data = await users.blackList(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const users = new Users();
        // eslint-disable-next-line no-unused-vars
        const token =  req.get('Authorization').split(' ');
        const {id} = Jwt.decode(token[ 1 ]);
        const data = await users.update(id, req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const emailCheck = async (req, res) => {
    try {
        const user = new Users();
        const {email} = req.body;
        const data = await user.getByEmail(email);
        if (data) {
            res.status(200).json({status: false});
        } else {
            res.status(200).json({status: true});
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const addFavorite = async (req, res) => {
    try {
        const users = new Users();
        const data = await users.addFavorite(req.body);
        res.status(201).json(data);
    } catch ({message}) {
        res.status(400).json({message});
    }
};

