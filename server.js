'use strict';

const express = require('express');
const app = express()
const path = require("path")
app.get("/ward-program", function (req, res) {
    res.sendFile(__dirname+"/index.html")
})
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use('/public', express.static(path.join(__dirname, 'public')))

   
app.listen(3000)



