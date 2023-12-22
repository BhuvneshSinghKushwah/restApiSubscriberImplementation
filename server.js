require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('mongodb connected'));

app.use(express.json());

const subscriberRouter = require('./router/subscribers');
app.use('/subscribers', subscriberRouter);

app.listen(3000, () => {
    console.log('server is listening to port 3000');
})