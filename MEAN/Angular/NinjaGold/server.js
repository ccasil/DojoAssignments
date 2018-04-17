
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/NinjaGold');
var UserSchema = new mongoose.Schema({
    score: { type: Number, required: [true, "score is required"]}
});
mongoose.model('User', UserSchema); 
var User = mongoose.model('User')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/NinjaGoldAngular/dist'));

app.get('/farm', function (req, res) {
    res.json({message: "Successfully Farmed"})
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})