import express from 'express';
import {Conversation} from '../../controllers/conversation.js';
import { conversationSchema } from '../../schemas/conversation.js';
import {validator} from '../../utils';


const router = express.Router();


router.post('/', [ validator(conversationSchema) ], async (req, res) => {
    try {
        const conversation = new Conversation(
            req.body,
        );
        await conversation.createConversation();
        res.status(201).send('Conversation created');
    } catch (error) {
        res.status(500).json(error);
    }
});

//get conv of a user

router.get('/:userId', async (req, res) => {
    try {
        const conversation = new Conversation();
        const {userId} = req.params;
        const data = await conversation.getById(userId);
        const newData = [];
        data.forEach((item) => {
            let i = {
                _id:       item._id,
                createdAt: item.createdAt,
                // eslint-disable-next-line eqeqeq
                receiver:  item.receiverId._id != userId ? item.receiverId : item.senderId};


            newData.push(i);
        });

        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get conv includes two userId

router.get('/find/:firstUserId/:secondUserId', async (req, res) => {
    try {
        const conversation = new Conversation();

        const  {firstUserId, secondUserId} = req.params;
        const data = await conversation.getTwoUsers(firstUserId, secondUserId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

export { router as conversation };
