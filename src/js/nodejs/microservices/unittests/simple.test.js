/*global describe, beforeEach, afterEach, it */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
"use strict";
// Require the supertest module
// ./node_modules/.bin/mocha -R spec src/js/nodejs/microservices/unittests/simple.test.js
var request = require('supertest');
// Decribe a simple test
describe('Loading the Express Framework', function(){
  // Declare the server variable
  var server;
  // Before any test can be execute the server needs to be intialized
  beforeEach(function(){
    //server = require('../private/server');
    server = require('../private/server');
  });
  afterEach(function(){ server.close(); });

  // it('responds to /', function testSlash(done){
  //   request(server).get('/').expect(200, done);
  // });

  it('404 everything else', function testPath(done){
    request(server).get('/foo/bar').expect(404, done);
  });
});
