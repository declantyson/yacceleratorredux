/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.3
 *  12/12/2016
 *
 */

const webpack = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      config = require('./webpack.config'),
      express = require('express'),
      app = new express();

let port = 3000,
    compiler = webpack(config);

app.use("/styles", express.static(__dirname + '/styles'));

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get("/*", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});