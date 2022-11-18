import { Router } from 'express';

import {statementCreate} from '../../schemas';

import { validator } from '../../utils';

import {Statement} from '../../controllers';
import jwt from 'jsonwebtoken';

const router = Router();

router.get('/',  async (req, res) => {
    try {
        const statement = new Statement();
        const data = await statement.getAll(req.query);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/create', [ validator(statementCreate) ], async (req, res) => {
    try {
        const token =  req.get('Authorization').split(' ');
        const {id} = jwt.decode(token[ 1 ]);
        const statement = new Statement({...req.body, userId: id});

        await statement.create();
        res.status(201).send('Statement created');
    } catch (error) {
        res.status(400).send(error);
    }
});


router.put('/update', (req, res) => {
    res.send('OK');
});

export { router as statement };

