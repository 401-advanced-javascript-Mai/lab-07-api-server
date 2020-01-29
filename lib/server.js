
'use strict';

const express = require('express');

const app = express();

const logRequest = require('./logger.js');
const timestamp = require('./timestamp.js');


// Global Middleware ...
// represent my data in json file 
// app.use it mean use globally 
app.use(express.json());

app.use(logRequest);
app.use(timestamp) ;




///// just for test 
app.get('/test', (req, res, next) => {
  console.log('i hit this route');
  res.status(200).json({ msg: 'hi' });

});


/// error function 

//404
function error404handler(req,res,next){
  res.status(404) ;
  res.statusMessage = 'Not Found 404 Error';
  res.json({error:'Not Found 404 Error'})
}

//500
// throw eroor
app.get('/I-throw-error',(req ,res) =>{
  throw new Error('real error')
});
// handle it 
function error500handler(err ,req,res,next){
  res.status(500);
  res.statusMessage = 'server error '
  res.json({ error: err });
};

// method can that can start the server
module.exports = { //is an object 
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

