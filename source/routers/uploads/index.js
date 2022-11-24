import express from 'express';
import path from 'path';
const router = express.Router();


router.get('/audio/:id', (req, res) => {
    const { id } = req.params;

    res.sendFile(path.resolve(path.join(process.cwd(), '/uploads/audio/', id)));
});

router.get('/avatar/:id', (req, res) => {
    const { id } = req.params;

    res.sendFile(path.resolve(path.join(process.cwd(), '/uploads/avatar/', id)));
});

export {router as uploads};
