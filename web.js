var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var outfile = 'index.html';

app.get('/', function(request, response) {
 
    var file = fs.readFileSync('index.html');
    response.writeHead(200);
    response.end(file.toString());

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
