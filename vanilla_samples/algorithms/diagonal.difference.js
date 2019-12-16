/* global  */
/* eslint no-plusplus:0 */
/**
 * @description
 * Run this example using NODEJS
 * node src/js/vanillajs/algorithms/diagonal.difference.js
 *
 * Given a matrix of values, this algorithm calculates the sum
 * of the diagonals, the first line of the input would define the number
 * of rows
 * Example Inputs would be:
 * 3
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 * Sample Output would be:
 * 15

 * @copyright (c) Copyright 2013 - 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
(function() {
  // NodeJS input processes
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  // process.stdin.setRawMode(true);
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
   * @description Executes the algorithm to calculate the difference
   * between the sum of the diagonal values in the matrix
   */
  function execute() {
    // Parse the first line of the input
    var n = parseInt(readLine(), 10),
    // Declare the array variables
    array1 = [], array2,
    // Declare the iterator and the diagonal sum and difference variables
    i, diag1 = 0, diag2 = 0, diff;
    // Loop through the array
    for (i = 0; i < n; i++) {
      // For each item read the line and split
      array1[i] = readLine().split(' ');
      // Map the values to numbers
      array1[i] = array1[i].map(Number);
    }
    // Clone the array, why because we only want one loop iteration
    array2 = array1.slice(0);
    // Reverse the array, thus we don't have to mess around calculating
    // the opposing indexes in the loop
    array2.reverse();
    // Set the array length
    n = array1.length;
    /*
      Matrix formats
      1 1 1
      2 2 2
      3 3 3

      1 1 1 1
      2 2 2 2
      3 3 3 3
      4 4 4 4
    */
    // Loop through the arrays
    for (i = 0; i < n; i++) {
      // Increment the diag1 value based on the representative index
      diag1 += array1[i][i];
      // Increment the diag2 value based on the representative index
      diag2 += array2[i][i];
    }
    // Calculate the difference
    diff = diag1 - diag2;
    // The result need to be a positive value
    if (diff < 0) { diff = -diff; }
    // Output to the console
    process.stdout.write(`${diff}\n`);
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
