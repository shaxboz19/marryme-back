// Core
import debug from 'debug';

// Instruments
import { app } from './server';
import { getPort } from './utils';

// Routers
import * as routers from './routers';

// DB
import './db';

const PORT = getPort();
const dg = debug('server:main');

app.get('/', (req, res) => {
    res.send('hello');
});
app.use('/login', routers.login);
app.use('/users', routers.users);
app.use('/statement', routers.statement);
app.use('/list/maritalStatuses', routers.mStatus);
app.use('/list/education', routers.education);
app.use('/list/candidateTypes', routers.cType);
app.use('/list/nationality', routers.nationality);
app.use('/conversations', routers.conversation);
app.use('/messages', routers.messages);
app.use('/uploads', routers.uploads);


app.listen(PORT, () => {
    dg(`Server API is up on port ${PORT}`);
});
