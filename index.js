const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/uploads', express.static(`${__dirname}/uploads`));

let AuthRoute = require('./route/auth');
app.use('/auth', AuthRoute);

let PaymentRoute = require('./route/payment');
app.use('/payment', PaymentRoute);


let BusinessRoute = require('./route/business');
app.use('/business', BusinessRoute);

module.exports = app;
