/* global  */
/* eslint no-plusplus:0 */
/**
 * @description
 * Run this example using NODEJS
 * node src/js/vanillajs/algorithms/time.conversion.js
 *
 * A simple time conversion example converts a 12 hour time format to the
 * common 24 hour format
 *
 * Samp,e Input would be:
 * 07:05:45PM
 *
 * Sample Output would be:
 * 16:05:45
 *
 * @copyright (c) Copyright 2013 - 2019 Impela Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * Impela Ltd (UK).
 */
(function() {
  // NodeJS input processes
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  // Declare the required variables
  let stdin = '',
  array = '',
  currentline = 0;
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
   * @description Executes the algorithm to convert the time format
   */
  function execute() {
    // Input time format
    // hh:mm:ssAM  hh:mm:ssPM
    // 04:45:23AM
    // 06:45:23PM
    // 12:23:43AM
    // 12:23:43PM
    const time = readLine().trim();
    let split = null, num = null, out = null;
    // Determine if this is PM, since the AM values do not change in a
    // Split the array by the colon
    split = time.split(':');
    // Parse the first hour index to an integer
    num = parseInt(split[0], 10);
    // 24 hour format, match the PM
    if (time.match(/PM/g) || time.match(/pm/g)) {
      // Determine if the NOON value has been supplied
      if (num === 12) {
        split[0] = num;
      // Add the 12 hour value to the sum
      } else {
        split[0] = num + 12;
      }
    } if (num === 12) {
      split[0] = '00';
    // Add the 12 hour value to the sum
    } else {
      split[0] = num;
    }
    // We need to append to precursor 0 if it's a single digit
    if (String(split[0]).length === 1) {
       split[0] = `0${split[0]}`;
     }
    // Merge the array back into the time format
    out = split.join(':');
    // Strip the 12 hour AM/PM from the end
    out = out.substr(0, out.length - 2);
    // Output to the console
    process.stdout.write(`${out}\n`);
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
