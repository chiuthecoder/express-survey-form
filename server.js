// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require body-parser
var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));

// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
});

app.post('/result', function(req, res){
			console.log("Post data", req.body);
	    var users_array = [{
	    	name: req.body.name, 
        location: req.body.location, 
        language: req.body.language, 
        comment: req.body.comment 
        }];
    res.render('result', {users: users_array});
});


// tell the express app to listen on port 8000
app.listen(8080, function() {
 console.log("listening on port 8080");
});