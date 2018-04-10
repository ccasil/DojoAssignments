
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');
var SheepSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name is required"]}
});
mongoose.model('Sheep', SheepSchema); 
var Sheep = mongoose.model('Sheep')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    Sheep.find({}, function (err, sheeps) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', { sheeps: sheeps });
        }
    })
})

app.get('/sheep/new', function (req,res) {
    res.render('create');
})

app.get('/sheep/:id', function (req, res) {
    Sheep.findOne({_id: req.params.id}, function (err, sheep) {
        if (err) {
            console.log(err);
        } else {
            res.render('show', { sheep: sheep});
        }
    })
})
app.get('/sheep/:id', function (req, res) {
    Sheep.findOne({ _id: req.params.id }, function (err, sheep) {
        if (err) {
            console.log(err);
        } else {
            res.render('show', { sheep: sheep });
        }
    })
})

app.get('/sheep/edit/:id', function (req, res) {
    Sheep.findOne({ _id: req.params.id }, function (err, sheep) {
        if (err) {
            console.log(err);
        } else {
            res.render('update', { sheep: sheep });
        }
    })
})

app.post('/sheep/:id', function (req, res) {
    Sheep.findOneAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name } }, {runValidators: true}, function (err, sheep) {

        if (err) {
            console.log('something went wrong', err);
            // res.render('update', { errors: err.errors })
            res.redirect('/');
        } else {
            console.log('successfully updated a sheep!');
            res.redirect('/');
        }
    })
})

app.post('/sheep/destroy/:id', function (req, res) {
    console.log(req.params.id)
    Sheep.remove({_id: req.params.id}, function(err){
        if (err) {
            console.log('something went wrong', err);
            res.render('update', { errors: sheep.errors })
        } else {
            console.log('successfully deleted a sheep!');
            res.redirect('/');
        }
    });
})

app.get('/cancel', function (req, res) {
    res.redirect('/');
})

mongoose.Promise = global.Promise;

app.post('/sheep', function (req, res) {
    console.log("POST DATA", req.body);
    var sheep = new Sheep({ name: req.body.name});
    sheep.save(function (err, results) {
        if (err) {
            console.log('something went wrong', err);
            res.render('create', { errors: sheep.errors })
        } else {
            console.log('successfully added a sheep!', results);
            res.redirect('/');
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})