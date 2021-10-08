//3rd party
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//proprietary
const formRoutes = require('./routes/form.js');

//init
dotenv.config()
const app = express();

//middleware
app.use(expressValidator());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use("/", formRoutes);


//Port settings
const port = process.env.PORT;
app.listen(port, ()=>{console.log(`listening through ${port}`)});



