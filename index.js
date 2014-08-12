var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
        res.sendfile('index.html');
        });

http.listen(3000, function(){
        console.log('listening on : ');
        });

io.on('connection', function(socket){
        console.log('a user connected');

        socket.on('chat message', function(msg){
            console.log('message:' + msg);
            });



        });
