const express = require('express');
const app = express();
const cors = require('cors');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('solarSystem');
  const planetsCollection = db.collection('planets');
  const planetsRouter = createRouter(planetsCollection);
  app.use('/api/planets', planetsRouter);
})
.catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
})
