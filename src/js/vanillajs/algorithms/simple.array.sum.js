/*global  */
/*jslint plusplus:true, nomen:true */
/**
 * @description
 * Run this example using NODEJS
 * node src/js/vanillajs/algorithms/simple.array.sum.js
 *
 * A Simple Algorithm to sum the array elements
 * Example Inputs would be:
 * 6
 * 1 2 3 4 10 11
 * Sample Output would be:
 * 31

 * @copyright (c) Copyright 2013 - 2016 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
(function(){
  "use strict";
  // NodeJS input processes
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  // Declare the required variables
  var stdin = "", array = "", currentline = 0;
  // Handle the on data
  process.stdin.on('data', function(data){ stdin += data; });
  // Read the current line and set as an index of the array
  function readLine(){ return array[currentline++]; }

  /**
   * @function execute
   * @description Executes the algorithm to sum the array values
   */
  function execute() {
    // Get the length of the items from the inputs, although it is not
    // actually needed since the reduce function will reduce all values
    var n = parseInt(readLine(), 10),
    // Parse the second line of inputs into an array
    arr = readLine().split(' '),
    // Declare the sum variable
    sum;
    // Cast the values to numbers
    arr = arr.map(Number);
    // Loop through using the reduce function
    sum = arr.reduce(function(acc, val){
      // Return the accumulator value added to the current value
      return acc + val;
    });
    // Output to the console
    process.stdout.write(sum + "\n");
  }

  // Handle the on process end
  process.stdin.on('end', function(){
    array = stdin.split("\n");
    execute();
  });
  // Capture the Signal Events, needed for Windows
  process.on('SIGINT', function(){
    array = stdin.split("\n");
    execute();
    process.exit();
  });

}());
