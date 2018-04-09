var express = require("express");
var path = require("path");
var session = require("express-session")
var bodyParser = require('body-parser');
var app = express();
app.use(session({ secret: 'myname' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

let messages = [];
app.get('/', function (req, res) {
    res.render("index", {key: messages});
})

var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {

    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);

    socket.on("createuser", function (data) {
    })

    socket.on("createmessage", function (data) {
        let n = data.name;
        let m = data.message;

        messages.push({
            name: n,
            message: m
        });

        io.emit('updated_message', { 
            name: data.name,
            message: data.message,
            allmessages: messages
        });
    })
})
