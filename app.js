// Call in installed dependencies
const express = require('express');
// set up express app
const app = express();


// import dependencies

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
const mongoose = require("mongoose");

// set up mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    console.log('Database connected');
})
    .catch((error)=> {
        console.log('Error connecting to database');
    });

// set up port number
const port = process.env.PORT || 5000;
// set up home route
app.get('/', (request, respond) => {
    respond.status(200).json({
        message: 'Welcome to Project Support',
    });
});
app.listen(port, (request, respond) => {
    console.log(`Our server is live on ${port}. Yay!`);
});

import mainRoutes from './server/routes/main';
app.use('/api/', mainRoutes);