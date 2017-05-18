/*global */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
"use strict";
module.exports = function(){
  return {
    authorizationURL:'https://staging-auth.wallstreetdocs.com/oauth/authorize',
    tokenURL:'https://staging-auth.wallstreetdocs.com/oauth/token',
    clientID:'coding_test',
    response_type:'token',
    clientSecret:'bwZm5XC6HTlr3fcdzRnD',
    callbackURL: 'http://localhost:3000'
  };
};
