import { Router } from 'express';


import {Education} from '../../controllers';


const router = Router();

router.get('/', async (req, res) => {
    try {
        const education = new Education();
        const data = await education.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error);
    }
});


export { router as education };

