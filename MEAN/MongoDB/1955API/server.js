
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name is required"]}
});
mongoose.model('User', UserSchema); 
var User = mongoose.model('User')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    User.find({}, function (err, user) {
        if (err) {
            console.log("Returned error", err);
            // respond with JSON
            res.json({ message: "Error", error: err })
        }
        else {
            // respond with JSON
            res.json({ message: "Success", data: user })
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})