'use strict' ;

let timestamp = (req , res , next )=>{
let time = new Data() ;
req.requestTime = time ;
next();
};

module.exports = {timestamp}