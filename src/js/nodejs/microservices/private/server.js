/*global */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
"use strict";
// Require the Express framework
var express = require('express'),
// Require the path module
path = require('path'),
// Require the express handle bars module
handlesbars = require('express-handlebars'),
// Require the cookie parse module
cookieParser = require('cookie-parser'),
// Require the body parse module
bodyParser = require('body-parser');


// Initialize the Express application
var authApp = express();
// Set the application port
authApp.set('port', 3000);
// Configure the view engine to utilize the handlebars module
authApp.set('views', path.join(__dirname, 'views'));
// Set the default handlebars layout file and the view engine
authApp.engine('.hbs', handlesbars({defaultLayout: 'main', extname: '.hbs'}));
// Set the view engine for the application to use
authApp.set('view engine', '.hbs');

// Parse the incoming request data using the body parser module
authApp.use(bodyParser.json());
authApp.use(bodyParser.urlencoded({extended: false}));
// Parse any Cookie data using the cookie parse module
authApp.use(cookieParser());
// Set the public directory for the application
authApp.use(express.static(path.join(__dirname, '../public')));

// Require the passport authorization object
var auth = require('./auth/oauth')(authApp);
// Require the application router and pass the express application object
require('./router')(authApp, auth);

// Handle the login post request and authenticate the user details
// Ultimately I may not place this here in a real application but I have
// limited time to spend on this!
authApp.post('/login', auth.authenticate('provider', { successRedirect: '/userdetails', failureRedirect: '/' }));


// Handle 404 errors in the event the user tries to access
// a non existent page
authApp.use(function(req, res, next){
  var err = new Error('The page was not found, please return to the home page here.');
  err.status = 404;
  next(err);
});
// Render the error message if it exists
authApp.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error',
  {
  title:(err.status === 404)?'Page Not Found':'System Error',
  message:err.message,
  error:{}
  });
});

// Set the port for listening to the application
var server = authApp.listen(authApp.get('port'), function(){
  console.log('Listening on Port: ' + authApp.get('port'));
});

// Export the context so that it is accessible as a node module
module.exports = server;
