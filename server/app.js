var express = require('express');
var app = express();
var shell = require('shelljs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    var options = {
        root: __dirname + '/views/'
    };

    res.sendFile("index.html", options, function() {
       // console.log("send index.html");
    });
});


app.get('/face_detector', function (req, res) {
    //console.log("Face Detector");
    shell.exec('~/AIY-projects-python/server/start_face_detector.sh');
    res.redirect('/');
});

app.listen(8000,process.argv[2],function(){
    console.log("Running server on port 8000...");
});

