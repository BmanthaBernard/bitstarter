var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var outfile = "index.html";
var out;

fs.readFileSync(outfile,out);

app.get('/', function(request, response) {
  response.send(out.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
