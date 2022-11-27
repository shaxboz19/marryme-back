import express from 'express';
import {login, forgotPassword, confirmCode, passwordUpdate} from './handlers';

// eslint-disable-next-line no-unused-vars
import { loginSchema, newPasswordSchema } from '../../schemas';
// eslint-disable-next-line no-unused-vars
import {validator} from '../../utils';


const router = express.Router();

router.post('/', [ validator(loginSchema) ], login);
router.post('/forgot-password', forgotPassword);
router.post('/confirm-code', confirmCode);
router.post('/password-update', [ validator(newPasswordSchema) ],  passwordUpdate);

export {router as login};
