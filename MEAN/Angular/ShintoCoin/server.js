
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/AngularTest');
var UserSchema = new mongoose.Schema({
    coins: { type: Number}
});
mongoose.model('User', UserSchema); 
var User = mongoose.model('User')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/ShintoCoinAngular/dist'));

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./ShintoCoinAngular/dist/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})