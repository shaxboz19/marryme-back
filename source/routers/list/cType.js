import { Router } from 'express';


import {CType} from '../../controllers';


const router = Router();

router.get('/', async (req, res) => {
    try {
        const types = new CType();
        const data = await types.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error);
    }
});


export { router as cType };

