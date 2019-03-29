const app = require('express')();
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const server = require('http').Server(app);
const template = require('./template.js');
const upload = require('./upload.js');

app.use(fileUpload());

server.listen(3000);

mongoose.connect('mongodb://localhost/csvimport');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/template', template.get);

app.post('/', upload.post);