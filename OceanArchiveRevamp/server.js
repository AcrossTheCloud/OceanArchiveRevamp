'use strict';
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Handle requests to server
app.get('/*', function (req, res) {
    //console.log('Things happened');
    res.render(__dirname + '/');
});

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening on port ' + app.get('port'));
});