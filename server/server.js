const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')
const cors = require('cors');
app.use(express.json());
app.use(cors());
MongoClient.connect('mongodb://mongo:4.0-xenial:27017', { useUnifiedTopology: true, useNewUrlParser: true })
.then((client) => {
    const db = client.db('shop');
    const comments = db.collection('comments');
    const commentsRouter = createRouter(comments);
    app.use('/api/comments', commentsRouter);
})
.catch(console.error)
app.listen(9000, function(){
    console.log("listenig on 9000");
})