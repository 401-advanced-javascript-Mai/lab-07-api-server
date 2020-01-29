
'use strict';

const express = require('express');

const app = express();

const logRequest = require('./logger.js')
const timestamp = require('./timestamp.js')


// Global Middleware ...
// represent my data in json file 
// app.use it mean use globally 
app.use(express.json());

app.use(logRequest);
app.use(timestamp) ;




///// just for test 
app.get('/test', (req, res, next) => {
  console.log('i hit this route')
  res.status(200).json({ msg: 'hi' });

});





// method can that can start the server
module.exports = { //is an object 
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

