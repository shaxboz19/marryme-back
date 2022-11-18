import { Router } from 'express';


import {MStatus} from '../../controllers';


const router = Router();

router.get('/', async (req, res) => {
    try {
        const mStatus = new MStatus();
        const data = await mStatus.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error);
    }
});


export { router as mStatus };

