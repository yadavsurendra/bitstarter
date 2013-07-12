var express = require('express');

var app = express.createServer(express.logger());
#var msg = fs.readFile('index.html', function (err, data)

app.get('/', function(request, response) {
  response.send('Hello World from index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
