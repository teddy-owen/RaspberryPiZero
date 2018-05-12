var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    var options = {
        root: __dirname + '/views/'
    };

    res.sendFile("index.html", options, function() {
        console.log("send index.html");
    });
});


app.get('/face_detector', function (req, res) {
    console.log("Face Detector");

    res.redirect('/');
});

app.listen(8000,"192.168.1.152",function(){
    console.log("Running server on port 3000...");
});