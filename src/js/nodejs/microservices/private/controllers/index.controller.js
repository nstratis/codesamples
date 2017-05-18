/*global */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
"use strict";
exports.index = function(req, res){
  //codingtest
  //password09876
  // Determine if the user has already logged in
  if(req.query.code === undefined){
    res.pageInfo = {};
    res.pageInfo.title = 'Welcome';
    res.pageInfo.desc = 'You do not appear to be logged into the system, please login below.';
    res.render('index', res.pageInfo);
  } else {
    console.log('USER LOGGED IN REDIRECT');
    res.redirect('/userdetails?code=' + req.query.code);
  }
};
