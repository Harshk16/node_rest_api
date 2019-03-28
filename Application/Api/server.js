const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
const data = require('./routes/data');

const app = express();

// Cors middleware
app.use(cors())

//  Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./keys').mongoURI;

// Connect to DB
mongoose
    .connect(db)
    .then(() => console.log('Connection sucess'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello world'));

// Use Routes
app.use('/api/data', data);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runnung on port ${port}`));

