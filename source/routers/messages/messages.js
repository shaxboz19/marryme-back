// const Message = require("../models/Message");
import express from 'express';
import { Messages } from '../../controllers/message';
import { messageSchema } from '../../schemas/message.schema';
import {validator} from '../../utils';
import multer from 'multer';
import { v4 } from 'uuid';


const router = express.Router();

let storagePhoto = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, 'uploads/photo');
    },

});

let storageAudio = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, 'uploads/audio');
    },
    filename: function (req, file, callBack) {
        const name = v4();
        callBack(null, name + '.webm');
    },

});
let uploadPhoto = multer({ storage: storagePhoto });
let uploadAudio = multer({ storage: storageAudio });

// eslint-disable-next-line babel/quotes
router.post("/", [ validator(messageSchema) ], async (req, res) => {
    try {
        const newMessage = new Messages(req.body);
        const data = await newMessage.createMessage();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/upload/photo', uploadPhoto.single('file'), async (req, res) => {
    try {
        const url = process.env.BASE_URL + '/' + req.file.path;
        const newMessage = new Messages({
            ...req.body,
            text: url,
            type: 'photo',
        });
        const data = await newMessage.createMessage();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});
// upload voice message
router.post('/upload/audio', uploadAudio.single('audio'), async (req, res) => {
    try {
        const url = process.env.BASE_URL + '/' + req.file.path;
        const newMessage = new Messages({
            ...req.body,
            text: url,
            type: 'audio',
        });
        const data = await newMessage.createMessage();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get

router.get('/:conversationId', async (req, res) => {
    try {
        const messagesModel = new Messages();
        const messages = await messagesModel.getByConversationId(req.params.conversationId);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }
});


// sss
export { router as messages };

