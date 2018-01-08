const express = require('express')
const app = express()
const router = express.Router();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port!'))

/* GET route for /languages */
router.get('/languages', (req, res, next) => {
    let languages = [
        {
            "id": 1,
            "name": "Amharic",
            "abbreviation": "am",
            "family": "semitic",
            "description": "A language spoken in Ethiopia",
            "createdAt": "today",
            "updatedAt": "just now"
        },
        {
            "id": 2,
            "name": "Arabic",
            "abbreviation": "ar",
            "family": "semitic",
            "description": "A language spoken in the middle east",
            "createdAt": "today",
            "updatedAt": "just now"
        },
        {
            "id": 3,
            "name": "English",
            "abbreviation": "en",
            "family": "germanic",
            "description": "The world language. Period.",
            "createdAt": "today",
            "updatedAt": "just now"
        },{
            "id": 4,
            "name": "French",
            "abbreviation": "fr",
            "family": "romance",
            "description": "A language spoken around the world",
            "createdAt": "today",
            "updatedAt": "just now"
        },{
            "id": 5,
            "name": "German",
            "abbreviation": "de",
            "family": "germanic",
            "description": "A language spoken mostly in Europe",
            "createdAt": "today",
            "updatedAt": "just now"
        }
    ];
    res.status(200).json({ languages });
});