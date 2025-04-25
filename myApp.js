let express = require('express');
let app = express();
require('dotenv').config();

// app.get('/', (req, res) =>{
//     res.send('Hello Express');
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });

// app.use('/public', express.static(__dirname + '/public'));

// console.log('Hello World');

// app.get('/json', (req, res) => {
//     if (process.env.MESSAGE_STYLE === 'uppercase') {
//         res.json({ message: 'Hello json'.toUpperCase() });
//     }
//     else {
//         res.json({ message: 'Hello json' });
//     }
// });

// app.use('/', (req, res, next) => {
//     console.log(req.method + ' ' + req.path + ' - ' + req.ip);
//     next();
// });

// app.get('/now', (req, res, next) => {
//     req.time = new Date().toString();
//     next();
// }, (req, res) => {
//     res.json({
//         "time" : req.time
//     })
// });

app.get("/:word/echo", (req, res) => {
    let word = req.params.word;
    res.json({
        echo: word
    })
});























 module.exports = app;
