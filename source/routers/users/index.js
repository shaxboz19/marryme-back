import express from 'express';

import { register } from '../auth/handlers.js';

import { userCreate, userUpdate, favoriteSchema } from '../../schemas';

import {update, addFavorite, emailCheck, getUser, whiteList, blackList} from './handlers.js';

import { validator } from '../../utils';

const router = express.Router();

router.post('/register', [ validator(userCreate) ], register);
router.patch('/update', [ validator(userUpdate) ], update);
router.post('/addFavorite', [ validator(favoriteSchema) ],  addFavorite);
router.post('/email-check', emailCheck);
router.post('/whiteList', [ validator(favoriteSchema) ], whiteList);
router.post('/blackList', [ validator(favoriteSchema) ],  blackList);
router.get('/me', getUser);


export {router as users};

