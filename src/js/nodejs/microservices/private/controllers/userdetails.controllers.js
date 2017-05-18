/*global */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
"use strict";
// Get the application config file with the params
var config = require('../config/config')(),
request = require('request');

exports.userdetails = function(req, res){

  // Declare the token data
  var tData;

  function renderUser(){
    var opts = {
      url: 'https://staging-auth.wallstreetdocs.com/oauth/userinfo',
      method: "GET",
      auth: { 'bearer':tData.access_token }
    };
    // Execute the request to retieve the user information
    request(opts, function(err, usrRes){
      // Determine if the request was authorized
      if(usrRes.body === 'Unauthorized'){

      } else {
        // Parse the response body as JSON
        var uData = JSON.parse(usrRes.body);
        // Set the page Info object
        res.pageInfo = {};
        // Set the default page title and description
        res.pageInfo.title = 'Your Details';
        res.pageInfo.desc = 'The profile details current stored on the Wall Street Site are below.';
        // Set the custom user value
        res.pageInfo.user_type = uData.user_type;
        res.pageInfo.organisation_name = uData.organisation_name;
        res.pageInfo.display_name = uData.display_name;
        res.pageInfo.given_name = uData.name.given_name;
        res.pageInfo.family_name = uData.name.family_name;
        res.pageInfo.created_at = uData.created_at;
        res.pageInfo.updated_at = uData.updated_at;
        // Render the user details
        res.render('userdetails', res.pageInfo);
      }
    });
  }

  // Retrieve the user tokens from the server
  // Determine if the user has already logged in
  if(req.query.code !== undefined){
    // Execute the request to retrieve the users info
    var options = {
      url: config.tokenURL,
      method:"POST",
      form:{
        code:req.query.code,
        grant_type:'authorization_code',
        client_id:config.clientID,
        client_secret:config.clientSecret,
        redirect_uri:config.callbackURL
      }
    };
    // Execute the curl request to retrieve the token
    request(options,
      function(err, tokenRes){
        tData = JSON.parse(tokenRes.body);
        renderUser();
      }
    );


  } else {
    res.redirect('/');
  }
};
