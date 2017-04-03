/*global console, spawn */
/*jslint unparam:true, white:true, node:true, stupid:true */
(function(){
    "use strict";
  /*
   * EXPRESSJS AND MIDDLEWARE
   * Simple example of middleware usage.
   */

  // Utilizing middleware in express is one of its fundamental features, that and routing, they are effectively functions that can access the request and response objects of the NodeJS http server. Given that the initialization of express would utilize the:
  var express = require('express'),
  app = express(),
  route = express.Router();

  // You might bind a middleware to a route with the use function
  route.use('myroute', function(request, response, next) { return; });
  // Alternatively you mind bind to the app object to handle the get, put post
  app.use('myroute/otherroute', function(request, response, next) { return; });
  // Or event
  app.get('myroute/otherroute', function(request, response, next) { return; });
  // Handle the get requests for the domain root
  app.get('/', function(req, res){
    //output a simple html response
    res.send('<!doctype html><html><head><title>Example Render</title></head><body><p>This is an example output to a browser</body</html>');
  });
  // Set up the node JS port listener
  app.listen(444, function(){ return; });

  /*
   * WRITING FILES IN NODEJS
   * Write a function that reads a json file* and writes an array with the min and max of each element to output.json
   * e.g. input.json [[1,2,6],[1,2,3]] -> output.json [{min:1,max:6}, {min:1,max:3}] * values.json [ [1,2,6], [1,2,3] ]
   */
  var fs = require('fs'),
  util = require('util'),
  jsonFile = './myfile.json';   // { "data": [[1,2,6],[1,2,3]] }

  // Write the new file to disk
  function writeFile(json){
    // Write the JSON file to the server, this is a rudimentary example
    fs.writeFileSync('output.json', util.inspect(json) , 'utf-8');
  }

  // Handle the formatting of the json array
  function frmtArray(array){
    // Declare the max, min values for usage and the output array
    var max, min, output;
    // Map each item from the array to the new array
    output = array.map(function(item, i){
      // Retrieve the max and min values from each array
      max = Math.max.apply(Math, item);
      min = Math.min.apply(Math, item);
      // Return the object for storage in the new array
      return {min:min, max:max};
    });

    // Should log  [{min:1,max:6}, {min:1,max:3}]
    console.log('Output Array: ', output);
    // Write the file to the server
    writeFile(output);
  }

  // Test Execution Only - Not part of the answer, see below for JSON
  // File load example
  //frmtArray([[1,2,6],[1,2,3]]);

  // Commented out so the file will execute in a browser
  // Check if the file path exists
	fs.exists(jsonFile, function(exists){
    // Ensure the json file exists before trying
    // to read the file
    if(exists){
    	// If the path does exists then read the file
    	fs.readFile(jsonFile, 'utf8', function (err, fileData) {
        // Parse the JSON data
        var json = JSON.parse(fileData);
        // Execute the format function
        frmtArray(json.data);
      });
    }
  });

  /*
   * CHILD PROCESSES IN NODEJS
   * These functions spawns 2 child node processes that send back "Hello world"
   * after x milliseconds, the delay should be defined by an argument
   * (e.g. node child_process 100). The function should return a promise that
   * resolves with the results of all child processes.
   */
  var
  // Load the bluebird promise management npm and the child_process packages
  Prm = require('bluebird'),
  // Define the process count and timeout values
  timeout = 1000;
  require('child_process');

  // Example child process file childpr.js
  setTimeout(function(){
    // Write the hello world output
    process.stdout.write('Hello world (' + process.argv[3] + ')');
  // Set the timeout of the process from the argument passed
  }, process.argv[2]);


  // Function to spawn the child process
  function strtProcess(index){
    // Return a promise spawning the child process
    return new Prm(function(resolve, reject){
      // Spawn the child process
      var prcs = spawn('node', ['./childpr.js', timeout, index]);
      // Set the on data handle for the process
      prcs.stdout.on('data', function(data) { return; });
      // Set the on error handler for the process
      process.stderr.on('data', function(err){ reject(err.toString()); });
      // Set the on exit handle for the process
      process.on('exit', function(){ resolve(); });
    });
  }

  // The main function to execute will begin the spawning of the child
  // processes utilizing a map function to map the promises to an array
  // and the execute a promise on the promises to a result array
  function begin(){
    // Results of the process spawn should be mapped to an array
    var results = [1, 2].map(function(item){
      // Create the child process promise
      return strtProcess.bind(null, item);
    });
    // Return a promise which executes the child process promises
    return Prm.map(results, function(prom){ return prom();}).then(function(){ return; });
  }
  // Start the spawning process
  var answer = begin();
  console.log(answer); // Should log ['Hello world (1)', 'Hello world (2)'];
  console.log(answer.join(',')); // Should log Hello world (1),Hello world (2)

}());
