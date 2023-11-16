const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')
app.use(express.json());
MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
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