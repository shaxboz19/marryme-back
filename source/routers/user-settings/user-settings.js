import { Router } from 'express';

import { personalData } from '../../schemas/personal.schema';
import { validator } from '../../utils';

import {Users} from '../../controllers/users';
import multer from 'multer';
import { v4 } from 'uuid';

const router = Router();

let storageAvatar = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, 'uploads/avatar');
    },
    filename: function (req, file, callBack) {
        const name = v4();
        callBack(null, name + file.originalname);
    },

});

let uploadPhoto = multer({ storage: storageAvatar });


router.patch('/:id', [ validator(personalData) ], async (req, res) => {
    try {
        const {id} = req.params;
        const user = new Users(req.body);
        const data = await user.updateSettings(id, req.body);
        res.status(200).json(data);
    } catch ({message}) {
        res.status(500).json({message});
    }
});


router.post('/upload/avatar/:id', uploadPhoto.single('avatar'), async (req, res) => {
    try {
        const url = process.env.BASE_URL + '/' + req.file.path;
        const body = {avatar: url};
        const user = new Users(body);
        const data = await user.updateAvatar(req.params.id, body);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

export { router as settings };

