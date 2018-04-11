
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/APItest');
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
            res.json({ user })
        }
    })
})
app.get('/new/:name', function (req, res) {
    var user = new User({ name: req.params.name });
    user.save(function (err, results) {
        if (err) {
            console.log('something went wrong', err);
        } else {
            console.log('successfully added a user!', results);
            res.redirect('/');
        }
    })
})
app.get('/remove/:name', function (req, res) {
    User.remove({ name: req.params.name }, function (err) {
        if (err) {
            console.log('something went wrong', err);
        } else {
            console.log('successfully deleted a user!');
            res.redirect('/');
        }
    });
})
app.get('/:name', function (req, res) {
    User.findOne({ name: req.params.name }, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            // respond with JSON
            res.json({ data: user })
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})