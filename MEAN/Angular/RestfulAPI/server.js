
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
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
});
mongoose.model('Task', TaskSchema); 
var Task = mongoose.model('Task')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/RestfulAPI/dist'));

// RETRIEVE ALL TASKS
app.get('/tasks', function (req, res) {
    Task.find({}, function (err, task) {
        if (err) {
            console.log("Returned error", err);
            // respond with JSON
            res.json({ message: "Error", error: err })
        }
        else {
            console.log(task)
            // respond with JSON
            res.json({message: "Success", tasks:task })
        }
    })
})

// CREATE A TASK
app.post('/tasks/new', function (req, res) {
    var task = new Task({ title: req.body.title });
    task.save(function (err, results) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Successfully added a task!", tasks: task })
        }
    })
})

// UPDATE A TASK
app.put('/tasks/edit/:id', function (req, res) {
    Task.findOneAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name } }, function (err, task) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Successfully updated a task!", tasks: task })
        }
    })
})

// DELETE A TASK
app.delete('/tasks/destroy/:id', function (req, res) {
    Task.remove({ _id: req.params.id }, function (err) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.end()
        }
    });
})

// RETRIEVE A TASK
app.get('/tasks/:id', function (req, res) {
    Task.findOne({ _id: req.params.id }, function (err, task) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            // respond with JSON
            res.json({ tasks: task })
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})