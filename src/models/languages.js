var mongoose = require('mongoose');

var Language = mongoose.model('Language', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    abbreviation: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2,
        trim: true
    },
    family: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 32,
        maxlength: 255,
        trim: true
    },
    createdAt: {
        type: Date
    }
    updatedAt: {
        type: Date
    }
});


module.exports = {Languages};

// [
//     {
//         "id": 1,
//         "name": "Amharic",
//         "abbreviation": "am",
//         "family": "semitic",
//         "description": "A language spoken in Ethiopia",
//         "createdAt": "2018-01-13T01:24:18.019Z",
//         "updatedAt": "2018-01-13T01:24:18.019Z"
//     },
//     {
//         "id": 2,
//         "name": "Arabic",
//         "abbreviation": "ar",
//         "family": "semitic",
//         "description": "A language spoken in the middle east",
//         "createdAt": "2018-01-13T01:24:18.019Z",
//         "updatedAt": "2018-01-13T01:24:18.019Z"
//     },
//     {
//         "id": 3,
//         "name": "English",
//         "abbreviation": "en",
//         "family": "germanic",
//         "description": "The world language. Period.",
//         "createdAt": "2018-01-13T01:24:18.019Z",
//         "updatedAt": "2018-01-13T01:24:18.019Z"
//     },{
//         "id": 4,
//         "name": "French",
//         "abbreviation": "fr",
//         "family": "romance",
//         "description": "A language spoken around the world",
//         "createdAt": "2018-01-13T01:24:18.019Z",
//         "updatedAt": "2018-01-13T01:24:18.019Z"
//     },{
//         "id": 5,
//         "name": "German",
//         "abbreviation": "de",
//         "family": "germanic",
//         "description": "A language spoken mostly in Europe",
//         "createdAt": "2018-01-13T01:24:18.019Z",
//         "updatedAt": "2018-01-13T01:24:18.019Z"
//     }
// ]