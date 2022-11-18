import express from 'express';
import path from 'path';
const router = express.Router();


router.get('/audio/:id', (req, res) => {
    const { id } = req.params;

    res.sendFile(path.resolve(path.join(process.cwd(), '/uploads/audio/', id)));
});


export {router as uploads};
