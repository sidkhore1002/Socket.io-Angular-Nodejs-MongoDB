const express = require('express');
const app = express();
var mongoose = require ("mongoose"); // The reason for this demo.

mongoose.connect('mongodb://localhost:27017/sid', {useNewUrlParser: true});

app.get('/', function (req, res) { return res.send('Hello World with Sequelize Rest API'); });
require('../routes/books.js')(app);

var bookCtrl = require('../controllers/book.controller')
//-----------------------------------socket ----------------------------------------------

const server = app.listen(1337);
console.log("listening on port 1337")
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.on('event',function(data){      
//        console.log("Socket id is",socket.id)
        console.log("client's data:- ",data.name)

        var cnt=1

        setInterval(() => {
        //    console.log(cnt)
            bookCtrl.update(cnt)

            setInterval(() => {}, 1000);

            bookCtrl.findone()

            io.emit('message',{msg:cnt})
            cnt = cnt +1

        }, 3000);

    /*    myFunc(1)

        function myFunc(cnt) {
            console.log(cnt)
            bookCtrl.update(cnt)

            io.emit('message',{msg:cnt})

            cnt = cnt +1
            setTimeout(myFunc, 2000, cnt);        
        }*/
    
    })
});

