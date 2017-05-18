/*global jQuery, QUnit, $ */
/*jslint plusplus:true, nomen:true */
/**
 * @description Basic Unit test example for the jQuery plugin using qUnit
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
"use strict";
QUnit.test( "Simple plugin test", function(assert){
  // Simple assertion to determine if the p lub
  assert.equal(typeof jQuery().animateContent, "function", "Ensure the the custom function has been added to the jQuery namespace.");
});
