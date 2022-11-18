import express from 'express';
import {login} from './handlers';

// eslint-disable-next-line no-unused-vars
import { loginSchema } from '../../schemas';
// eslint-disable-next-line no-unused-vars
import {validator} from '../../utils';


const router = express.Router();

router.post('/', [ validator(loginSchema) ], login);

export {router as login};
