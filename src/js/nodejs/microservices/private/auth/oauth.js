/*global */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
 "use strict";
// Require passport and the oAuth2 Strategy module
var passport = require('passport'),
OAuth2Strategy = require('passport-oauth2').Strategy,
// Get the application config file with the params
config = require('../config/config')();

module.exports = function(authApp){
  console.log('passport.initialization()');
  console.log(config);
  // Set the oAuth 2 Strategy
  passport.use('provider', new OAuth2Strategy({
    authorizationURL:config.authorizationURL,
    tokenURL:config.tokenURL,
    clientID:config.clientID,
    response_type:config.response_type,
    clientSecret:config.clientSecret,
    callbackURL:config.callbackURL
    },
    function(accessToken, refreshToken, profile, done){
      console.log('Callback Executed!', accessToken, refreshToken, profile, done);
    }
  ));
  return passport;
};
