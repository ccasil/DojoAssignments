
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/APItest');
var TaskSchema = new mongoose.Schema({
    title: { type: String, required: [true, "title is required"]},
    description: { type: String, default: ""},
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
mongoose.model('Task', TaskSchema); 
var Task = mongoose.model('Task')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    Task.find({}, function (err, task) {
        if (err) {
            console.log("Returned error", err);
            // respond with JSON
            res.json({ message: "Error", error: err })
        }
        else {
            // respond with JSON
            res.json({ task })
        }
    })
})
app.post('/new/:title', function (req, res) {
    var task = new Task({ title: req.params.title });
    task.save(function (err, results) {
        if (err) {
            console.log('something went wrong', err);
        } else {
            console.log('successfully added a task!', results);
            res.redirect('/');
        }
    })
})
app.get('/remove/:title', function (req, res) {
    Task.remove({ title: req.params.title }, function (err) {
        if (err) {
            console.log('something went wrong', err);
        } else {
            console.log('successfully deleted a task!');
            res.redirect('/');
        }
    });
})
app.get('/:title', function (req, res) {
    Task.findOne({ title: req.params.title }, function (err, task) {
        if (err) {
            console.log(err);
        } else {
            // respond with JSON
            res.json({ data: task })
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})