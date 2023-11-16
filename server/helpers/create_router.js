const express = require('express'); 
const createRouter = function (collection) { 
  const router = express.Router();
  router.get('/', (request, response) => {collection.find().toArray().then(docs => response.json(docs))});

  

  return router; 
}; 
module.exports = createRouter;