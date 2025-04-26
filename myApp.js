let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require("body-parser");


app.use('/', (req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});

// app.get('/', (req, res) =>{
//     res.send('Hello Express');
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World');

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({ message: 'Hello json'.toUpperCase() });
    }
    else {
        res.json({ message: 'Hello json' });
    }
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({
        "time" : req.time
    })
});

app.get("/:word/echo", (req, res) => {
    let word = req.params.word;
    res.json({
        echo: word
    })
});

app.get("/name", (req, res) => {
    let name = req.query
    res.json({
        name: `${name.first} ${name.last}`
    });
});

// app.use(bodyParser.urlencoded({
//     extended : false
// }));

app.post("/name", bodyParser.urlencoded({extended : false}) ,(req, res) => {
    res.json({
        name: req.body.first + " " + req.body.last
    });
});

if (require.main === module) {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
}

 module.exports = app;
