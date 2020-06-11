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

   
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})
