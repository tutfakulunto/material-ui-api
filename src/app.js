const express = require('express');
var cors = require('cors')
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const passport = require('passport');

const {MongoClient, ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');

passport.use(new GoogleStrategy());

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'));

/* GET route for /languages */
router.get('/', (req, res) => {
    const languages = require('./src/models/languages');
    res.status(200).json({data: languages});
});
app.use('/languages', router);

app.use(bodyParser.json());
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n');
  next();
});

app.listen(3000, () => console.log('Example app listening on port!'));