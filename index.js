var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/app'));
//app.use(express.static(__dirname + '/content'));
app.use(express.static(__dirname + '/app'));
app.use('/content', express.static(__dirname + '/content'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"app/index.html"));
});
// views is directory for all template files'

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

/*app.get('/', function(request, response) {
  //response.render('index.html');
  response.sendFile(__dirname + '/index.html');
});*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


