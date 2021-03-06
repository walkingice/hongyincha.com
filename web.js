var express = require('express'),
    app = express();

app.configure(function() {
  app.use(express.favicon());
  app.use(express.logger());
  app.use(express.static(__dirname + '/_public'));
  app.use(express.bodyParser());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
