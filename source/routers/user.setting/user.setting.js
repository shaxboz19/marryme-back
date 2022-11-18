import { Router } from 'express';

import {personalData} from '../../schemas/index';
import { validator } from '../../utils';
import { users } from '../../odm';


const router = Router();


router.post('/:id', [ validator(personalData) ], async (req, res) => {
    try {
        const {id} = req.params;

        await users.updateOne({_id: id}, {...req.body}, {new: true, upsert: true});
        const user = await users.findOne({_id: id});
        res.send(user);
    } catch ({message}) {
        res.status(500).json({message});
    }
});
export { router as settings };

