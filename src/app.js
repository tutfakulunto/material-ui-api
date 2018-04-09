const express = require('express');
var cors = require('cors')
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const {MongoClient, ObjectID} = require('mongodb');
const Languages = require('./models/language');
const User = require('./models/user');

require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

app.use(cors())
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.get('/', (req, res) => res.send('Hello World!'));

/* GET route for /languages */
router.get('/', (req, res) => {
    const languages = require('./models/language');
    res.status(200).json({data: languages});
});
app.use('/languages', router);

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n');
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Example app listening on port!'));