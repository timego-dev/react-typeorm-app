import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import fallback from 'express-history-api-fallback';

import { connect } from './typeorm';

connect().then(() => {
  console.log('DB is connected');
}).catch((e) => {
  console.log(e);
});

const app = express();

app.disable('etag');
app.disable('x-powered-by');

app.use(cors());

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static(`${__dirname}/public`));
const root = `${__dirname}/public`;
app.use(express.static(`uploads`));

console.log(`${__dirname}/public`);

app.use(fallback('index.html', { root }));
app.use('*', (req, res) => {
  console.log('ROUTE NOT FOUND');
  res.sendStatus(400);
});
export default app;
