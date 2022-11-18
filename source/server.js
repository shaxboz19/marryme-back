/* eslint-disable id-blacklist */
// Core
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';


// Instruments
import {
    // eslint-disable-next-line no-unused-vars
    sessionOptions, swaggerDocument,
} from './utils';

// Routers

const app = express();
app.use(cors());
app.use(bodyParser.json({
    limit: '10kb',
}));
app.use(express.static('uploads'));


app.use(session(sessionOptions));
app.use(express.json({ limit: '10kb' }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };
