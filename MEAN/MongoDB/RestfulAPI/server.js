
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/RestfulRouting');
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


// RETRIEVE ALL TASKS
app.get('/tasks', function (req, res) {
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

// CREATE A TASK
app.post('/tasks', function (req, res) {
    var task = new Task({ title: req.body.title });
    task.save(function (err, results) {
        if (err) {
            console.log('something went wrong', err);
        } else {
            console.log('successfully added a task!', results);
            res.redirect('/tasks');
        }
    })
})

// UPDATE A TASK
app.put('/tasks/:id', function (req, res) {
    Task.findOneAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name } }, function (err, sheep) {
        if (err) {
            console.log('something went wrong', err);
        } else {
            console.log('successfully updated a sheep!');
            res.redirect('/tasks');
        }
    })
})

// DELETE A TASK
app.delete('/tasks/:id', function (req, res) {
    Task.remove({ _id: req.params.id }, function (err) {
        if (err) {
            console.log('something went wrong', err);
        } else {
            console.log('successfully deleted a task!');
            res.redirect('/tasks');
        }
    });
})

// RETIEVE A TASK
app.get('/tasks/:id', function (req, res) {
    Task.findOne({ _id: req.params.id }, function (err, task) {
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