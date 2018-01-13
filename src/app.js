const express = require('express');
const app = express();
const router = express.Router();

app.get('/', (req, res) => res.send('Hello World!'));

/* GET route for /languages */
router.get('/', (req, res) => {
    const languages = require('../fixtures/languages.json');
    res.status(200).json({ languages });
});
app.use('/languages', router);

app.listen(3000, () => console.log('Example app listening on port!'));