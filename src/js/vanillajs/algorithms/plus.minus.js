/*global  */
/*jslint plusplus:true, nomen:true */
/**
 * @description
 * Run this example using NODEJS
 * node src/js/vanillajs/algorithms/plus.minus.js
 *
 * This algorithm calculates which fraction of an arrays elements are positive
 * of the diagonals, the first line of the input would define the number
 * of numbers
 * Example Inputs would be:
 * 6
 * -4 3 -9 0 4 1
 * Sample Output would be:
 * 0.500000  (This is the number of positive values as a fraction)
 * 0.333333  (This is the number of negative values as a fraction)
 * 0.166667  (This is the number of 0 values)

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
   * @description Executes the algorithm to calculate the decimal values
   */
  function execute() {
    // Parse the first line of the user inputs
    var n = parseInt(readLine(), 10),
    // Parse the second line which is the array inputs
    arr = readLine().split(' '),
    // Declare the totals variables
    ps = 0, ns = 0, zs = 0,
    // Declare the iterators
    i,
    // Declare the output vars
    po, no, zo;
    // Map the array values as numbers
    arr = arr.map(Number);
    // Get the length of the array
    n= arr.length;
    // Loop through the array
    for(i = 0; i<n; i++){
      // Determine if the value is positive
      if(arr[i] > 0){ ps++;
      } else if(arr[i] === 0){ zs++;
      } else if(arr[i] < 0){ ns++; }
    }

    // Calculate the fraction
    po = ps/n;
    no = ns/n;
    zo = zs/n;
    // console.log(ps, ns, zs);
    // console.log(po, no, zo);
    // Output to the console
    process.stdout.write(po.toFixed(6) + "\n");
    process.stdout.write(no.toFixed(6) + "\n");
    process.stdout.write(zo.toFixed(6) + "\n");
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
