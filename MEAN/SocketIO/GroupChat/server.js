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

app.get('/', function (req, res) {
    res.render("index");
})

var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});

let name = ""
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in herecopy
    socket.on("createuser", function (data) {
        name = data.name
        socket.emit('updated_page', { name: data.name });
        socket.emit('updated_message', { name: data.name });
    })
})
