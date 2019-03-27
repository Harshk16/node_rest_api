const express = require('express');
const mongoose = require('mongoose');

const data = require('./routes/data');

const app = express();

// DB Config
const db = require('./keys').mongoURI;

// Connect to DB
mongoose
    .connect(db)
    .then(() => console.log('Connection sucess'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello world'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runnung on port ${port}`));