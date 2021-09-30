// "node index.js" = run script

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Output text on console
/*
const sum = (num1, num2) => {

    return num1 + num2;
}

const result = sum(2, 3);

console.log (result);
*/

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Generate txt file
/*
const fs = require('fs');

const generateFile = () => {
    try {
        fs.writeFileSync('data.txt', "Hi, this file was made with Node");
    } catch (err) {
        console.log(err);
    }
}

generateFile();
*/

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Run local server = localhost:8080
/*
const http = require('http');

http.createServer(function (req, res) {
    res.write('Server started. HI!!');
    res.end();
}).listen(8080);
*/

// Get date from function in other file "my-module.js"
/*
const myModule = require('./my-module');

const date =  myModule();

console.log(date);
*/

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// blah

// requiring express
const express = require('express');

// initializing the express app
const app = express();

// specifying a port ot listen on localhost:9000
const port = 9000;

// API / urls
app.get('/', (req, res) => {
    res.send("Hi from the express server!");
});

app.get('/api/cats', (req, res) => {

    // call to db

    // return dummy data
    const cats = ["British Shorthair", "Ragdoll", "Russian Blue"];

    // sending a response should be in JSON
    res.send(JSON.stringify(cats));
});

app.get('/api/dogs', (req, res) => {

    // call to db

    // return dummy data
    const cats = ["Husky", "German Shephard"];

    // sending a response should be in JSON
    res.send(JSON.stringify(cats));
});

// running the express http server on the port we specified
app.listen(port, () => {
    console.log("Listening on port", port);
});

