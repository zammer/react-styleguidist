var express = require('express');
var webpack = require('webpack');
var makeWebpackConfig = require('./make-webpack-config');
var config = require('./utils/config');

var app = express();
var compiler = webpack(makeWebpackConfig('development'));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(config.serverPort, config.serverHost, function (err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log('Listening at http://' + config.serverHost + ':' + config.serverPort);
});