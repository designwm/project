import express from 'express'

const app = express()

import db from './db.js';

import bodyParser from 'body-parser';

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World asdas')
})

import auditRouter from './routes/auditRoutes.js';
app.use('/audit', auditRouter);

app.listen(3000, () => {
  console.log('Server is running on localhost')
})