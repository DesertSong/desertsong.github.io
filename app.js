//var urls = require('urls.js');

var express = require('express')
var app = express();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000))
app.set('views', './views')
app.set('view engine', 'jade')

app.engine('jade', require('jade').__express);


app.use(express.static(__dirname + '/public'))

//Routes
//for (var i=0,l=urls.length; i<l; i++) {
  //var url = urls[i];
  //app.all(url.pattern,url.view);
//}

app.get('/', function(request, response) {
  response.render('index', {title: 'Hey', message: 'Hello There!'});
})

app.get('/teams', function(request, response) {
  response.render('teams/index', {});
})

app.get('/leagues', function(request, response) {
  response.render('leagues/index', {});
})

app.get('/profile', function(request, response) {
  response.render('profile/index', {});
})
//End Routes

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
