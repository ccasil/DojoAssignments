
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/Authors');
var AuthorSchema = new mongoose.Schema({
    name: { type: Number, required: [true, "name is required"]}
});
mongoose.model('Author', AuthorSchema); 
var Author = mongoose.model('Author')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/AuthorsAngular/dist'));

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./AuthorsAngular/dist/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})