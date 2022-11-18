import { Router } from 'express';


import {Nationality} from '../../controllers';


const router = Router();

router.get('/', async (req, res) => {
    try {
        const nationality = new Nationality();
        const data = await nationality.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error);
    }
});


export { router as nationality };

