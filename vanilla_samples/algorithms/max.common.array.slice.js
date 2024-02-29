/* global  */
/* eslint no-plusplus:0, no-unused-vars:0 */
/**
 * @description
 * Run this example using NODEJS
 * node src/js/vanillajs/algorithms/max.common.array.slice.js
 *
 * Given a matrix of values, this algorithm calculates the sum
 * of the diagonals, the first line of the input would define the number
 * of rows
 * Example Inputs would be:
 * 1,1,1,2,2,2,1,1,2,2,6,2,1,8
 * or 53,800,0,0,0,356,8988,1,1
 * Sample Output would be:
 * 10
 * or 4

 * @copyright (c) Copyright 2013 - 2019 Impela Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * Impela Ltd (UK).
 */

(function() {
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let input = '',
    array;
    // Handle the on data and execute
    process.stdin.on('data', (data) => {
      // Increment the input and trim
      input += data;
    });

  /**
   * @function execute
   * @description Executes the algorithm to calculate the difference
   * between the sum of the diagonal values in the matrix
   */
  function execute() {
    const blocks = [],
    // Consecutive blocks array
    consec = [];
    let i,
    // Get the lenght of the array
    length = array.length,
    // Set the blocks object, this will hold the bloke array based on a length
    // property value so that we need to calculate later on
    // Default block index property name
    blockIndex = 0,
    // The current consec Index
    consecIndex = 0,
    val1 = null,
    val2 = null,
    maxLen = 0,
    selIndex;
    // Loop through the array and determine if the following
    // index is a duplicate of the previous index
    for (i = 0; i < length; i++) {
      // Determine the current index is the same value as the previous
      // index
      if (i === 0) {
        // Ensure an array exists for the current index
        if (blocks[blockIndex] === undefined) {
          blocks[blockIndex] = { i, grp: [] };
        }
        // Push the value to the block array
        blocks[blockIndex].grp.push(array[i]);
      // Determine if the value is equal to the previous index value thus
      // continuing the chain
      } else if (array[i] === array[i - 1]) {
        // Ensure an array exists for the current index
        if (blocks[blockIndex] === undefined) {
          blocks[blockIndex] = { i, grp: [] };
        }
        // Push the value to the block array
        blocks[blockIndex].grp.push(array[i]);
      } else {
        // Set the current index
        blockIndex++;
        // Create a new array to hold the group
        blocks[blockIndex] = { i, grp: [] };
        // Push the value to the block array
        blocks[blockIndex].grp.push(array[i]);
      }
    }
    // Given that we now know the pattern groups we can loop the blocks array
    // Set the length to the blocks array length
    length = blocks.length;
    // Loop through the first index for each of the array rows and find
    // the duplicate values
    for (i = 0; i < length; i++) {
      // Lets start with i = 0 and push the first group
      if (i === 0) {
        // Set the index 0 with the default block
        consec[consecIndex] = {
          i: blocks[0].i,
          grp: blocks[0].grp
        };
        // Set the value 1
        val1 = blocks[0].grp[0];
      } else {
        // Determine if val2 is undefined
        /* eslint-disable no-lonely-if */
        if (val2 === null) {
          // Set the value to index
          val2 = blocks[i].grp[0];
          // Push the value to the current block as its the next
          // different number
          consec[consecIndex].grp = consec[consecIndex].grp.concat(blocks[i].grp);
        } else {
          // Given we have the initial value 1 and 2 we can now compare against
          if (blocks[i].grp[0] === val1 || blocks[i].grp[0] === val2) {
            // Concatenate to the current array
            consec[consecIndex].grp = consec[consecIndex].grp.concat(blocks[i].grp);
          } else {
            val1 = blocks[i - 1].grp[0];
            consec.push({ i: blocks[i - 1].i, grp: blocks[i - 1].grp });
            consecIndex = consec.length - 1;
            val2 = blocks[i].grp[0];
            consec[consecIndex].grp = consec[consecIndex].grp.concat(blocks[i].grp);
          }
        }
      }
    }
    // Set the length to the length of the conec array
    length = consec.length;
    // Now determine which array has the max length
    for (i = 0; i < length; i++) {
      // Determine which if the array indexes has the max length
      if (consec[i].grp.length > maxLen) {
        // Reset the max length
        maxLen = consec[i].grp.length;
        // Set the start index
        selIndex = consec[i].i;
      }
    }
    // console.log(blocks);
    // console.log(consec);
    // console.log(array.splice(selIndex, maxLen));
    // console.log('Answer: ', selIndex, maxLen);
    process.stdout.write(`${maxLen}\n`);
  }

  // Handle the on process end
  process.stdin.on('end', () => {
    input = input.trim();
    // Split the values to an array
    array = input.split(',');
    execute();
  });

  // Capture the Signal Events, needed for Windows
  process.on('SIGINT', () => {
    input = input.trim();
    // Split the values to an array
    array = input.split(',');
    execute();
    process.exit();
  });
}());
