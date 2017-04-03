/*global  */
/*jslint plusplus:true, nomen:true */
/**
 * @description
 * Run this example using NODEJS
 * node src/js/vanillajs/algorithms/min.max.sum.js
 *
 * The following alogorithms calculates the minimum and maximum
 * sum of the supplied values by taking only 4 of the values
 * Example Inputs would be:
 * 1 2 3 4 5
 * Sample Output would be:
 * 10 14

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
   * @description Executes the algorithm to calculate the minimum
   * and the maximum values
   */
  function execute() {
    // Read the first line of the user inputs and split into an array
    var arr = readLine().split(' '),
    // Declare the sum, totals array and max min variables
    sum, totsArr, max, min;
    // Map the array values to numbers
    arr = arr.map(Number);
    // Loop through using the reduce function
    sum = arr.reduce(function(acc, val){
      // Return the accumulator value added to the current value
      return acc + val;
    });
    // Now lets find the values for the sum of only for indexes per index
    // eliminating the index value
    totsArr = arr.map(function(val, i){
      // Return the sum - the current value
      return sum - val;
    });
    // Determine the max value
    max = Math.max.apply(this, totsArr);
    // Determine the min value
    min = Math.min.apply(this, totsArr);
    // Output to the console
    process.stdout.write(min + " " + max + "\n");
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
