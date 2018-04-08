'use strict';

var express = require('express');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var user = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-AUTH-TOKEN, X-Requested-With, Content-Type, Accept');
  next();
});

app.options('*', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-AUTH-TOKEN, X-Requested-With, Content-Type, Accept');
  res.send(200);
});

app.use(express.static('solution-here'));

app.use('/users', user);


/// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).json({message:'Sorry, youre in the wrong place'});
});

/// error handlers

// development error handler
// will print stacktrace
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = app;
