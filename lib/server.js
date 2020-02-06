/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

'use strict';

const express = require('express');

const app = express();

const logRequest = require('./logger.js');
const timestamp = require('./timestamp.js');
const Model = require('../models/n-memory-data-model.js');
// const uuid =  require('uuid/v4'); 


// Global Middleware ...
// represent my data in json file 
// app.use it mean use globally 
app.use(express.json());


// require middleWare 
app.use(logRequest);
app.use(timestamp) ;

//  it can be used in API route to acsses the crud method 
let model= new Model;




///// just for test 
app.get('/test', (req, res, next) => {
  console.log('i hit this route');
  res.status(200).json({ msg: 'hi' });

});

// API route
// products route 
// let db = [];
// get
app.get('/api/v1/products', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.status(200).json({  'count ' : count, 'results': results });
});

// get by id 
app.get('/api/v1/products/:id', (req ,res , next)=>{
  let id = req.params.id ;
  // go to module to apply get method
  model.get(id);
  // parseInt it return as a object
  let data = db.filter((data)=> data.id === parseInt(id));
  res.status(200).json(data);
});

//post

app.post('/api/v1/products' , (req,res, next) =>{
  let {category} = req.body ;
  let data ={category} ;
  // adding an item 
  data.id == db.length +1;
  model.create(data , data.id);
  db.push(data);
  res.status(201).json(data);
});


// put 

app.put('/api/v1/products' , (req,res, next) =>{
  let toUpdate = req.params.id ;
  console.log('toupdate' ,toUpdate);
  let {category , id  } =req.body  ;
  data.id == db.length +1;
  let updatedItem ={category , id };
  console.log('updatedItem' , updatedItem);
  model.update(id , category);
  db = db.map((record) => (record.id === parseInt(toUpdate)) ? updatedItem : record);
  console.log('updatedItem2' , updatedItem);

  res.json(updatedItem);
});


// delete 
app.delete('/api/v1/products/:id' ,()=>{
  let id = req.params.id ;
  model.delete(id);
  db = db.filter((record) => record.id !== parseInt(id));
  res.json({ masseage : ' you do it , the item deleted'});
});


////////////////////////////////////////////////////////
// categories route
// get 
app.get('/api/v1/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.status(200).json({  'count ' : count, 'results': results });
});


// get by id 
app.get('/api/v1/categories/:id', (req ,res , next)=>{
  let id = req.params.id ;
  model.get(id);
  let data = db.filter((data)=> data.id === parseInt(id));
  res.status(200).json(data);
});
//post
app.post('/api/v1/categories' , (req,res, next) =>{
  let {category} = req.body ;
  let data ={category} ;
  data.id == db.length +1;
  model.create(data , data.id);
  db.push(data);
  res.status(201).json(data);
});
// put 


app.put('/api/v1/categories' , (req,res, next) =>{
  let toUpdate = req.params.id ;
  console.log('toupdate' ,toUpdate);
  let {category , id  } =req.body  ;
  data.id == db.length +1;
  let updatedItem ={category , id };
  console.log('updatedItem' , updatedItem);
  model.update(id , category);
  db = db.map((record) => (record.id === parseInt(toUpdate)) ? updatedItem : record);
  console.log('updatedItem2' , updatedItem);

  res.json(updatedItem);
});

// delete 

app.delete('/api/v1/categories/:id' ,()=>{
  let id = req.params.id ;
  model.delete(id);
  db = db.filter((record) => record.id !== parseInt(id));
  res.json({ masseage : ' you do it , the item deleted'});
});





/// error function 

//404
function error404handler(req,res,next){
  res.status(404) ;
  res.statusMessage = 'Not Found 404 Error';
  res.json({error:'Not Found 404 Error'});
}

//500
// throw eroor
app.get('/I-throw-error',(req ,res) =>{
  throw new Error('real error');
});
// handle it 
function error500handler(err ,req,res,next){
  res.status(500);
  res.statusMessage = 'server error ';
  res.json({ error: err });
}







// method can that can start the server
module.exports = { //is an object 
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

