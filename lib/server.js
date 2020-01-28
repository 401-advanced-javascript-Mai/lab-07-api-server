  
'use strict';

const express = require('express');

const app = express();

// Global Middleware ...
app.use(express.json());





// method can that can start the server
module.exports = {
    server: app,
    start: port => {
      let PORT = port || process.env.PORT || 3000;
      app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    },
  };