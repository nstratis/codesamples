/* global  */
/* eslint no-plusplus:0 */
/**
 * @description
 * Run this example using NODEJS
 * node src/js/vanillajs/algorithms/staircase.js
 *
 * This algorithm outputs a staircase represented by hash symbols
 * Example Input would be:
 * 6
 *
 * Sample Output would be:
 *       #
 *      ##
 *     ###
 *    ####
 *   #####
 *  ######
 *
 * @copyright (c) Copyright 2013 - 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
(function() {
  // Process default, resume so that the input can be read and
  // set the encoding to ascii
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  // Declare the required variables
  let stdin = '',
  array = '', currentline = 0;
  // Handle the on data
  process.stdin.on('data', (data) => {
    stdin += data;
  });
  // Read the current line and set as an index of the array
  function readLine() {
    return array[currentline++];
  }

  /**
   * @function execute
   * @description Executes the algorithm to calculate the decimal values
   */
  function execute() {
    let i,
    // Declare the output variable for the row
    out;
    // Read the first line to retrive the line count required for the stairs
    const n = parseInt(readLine(), 10),
    mapFunc = (val, ind) => {
      // Get the start index for the hash
      var start = n - i - 1;
      /*
      0 _____#  5
      1 ____##  4 5
      2 ___###  3 4 5
      3 __####  2 3 4 5
      4 _#####  1 2 3 4 5
      5 ######  0 1 2 3 4 5
      */
      // Return the space as the step moves from left to right
      if (ind < start) { return ' '; }
      // Return the hash for the next step increment
      return val;
    },
    // Create a new array to be used as a mapping object for the 6
    // areas in the output, given the steps travel from left to right
    // the left areas must be replaced by spaces
    row = new Array(n).fill('#');
    // Loop though the input variable
    for (i = 0; i < n; i++) {
      // Map the index value to an array, the result would be
      // i = 0 [' ',' ',' ',' ',' ','#']
      // i = 6 ['#','#','#','#','#','#']
      out = row.map(mapFunc);
      // console.log(i, out);
      // Output to the console
      process.stdout.write(`${out.join('')}\n`);
    }
  }

  // Handle the on process end
  process.stdin.on('end', () => {
    array = stdin.split('\n');
    execute();
  });
  // Capture the Signal Events, needed for Windows
  process.on('SIGINT', () => {
    array = stdin.split('\n');
    execute();
    process.exit();
  });
}());
