var express =  require('express');

var port = process.env.PORT || 8000;

var app = express();

app.use(express.static('public'))

app.get('/', function (req, res) {
	res.render('index');
})


app.listen(port, function () {
	console.log('Server listen in localhots: ' + port);
})

