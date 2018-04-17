
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/AngularTest');
var UserSchema = new mongoose.Schema({
    name: { type: Number, required: [true, "name is required"]}
});
mongoose.model('User', UserSchema); 
var User = mongoose.model('User')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/AngularBase/dist'));

app.get('/', function (req, res) {

})

app.listen(8000, function () {
    console.log("listening on port 8000");
})