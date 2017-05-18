/*global debug, app, aim, jQuery */
/*jslint plusplus:true, nomen:true */
/**
 * @class context
 * @description A custom jQuery plugin
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
(function($){
  "use strict";

  /**
   * @function animateItem
   * @description A simple function to set a timeout on an inner element
   */
  function animateItem(speed, item, i){
    // Set a timeout to add the visible state for the item
    setTimeout(function(){
      // Add the visible class to the item
      $(item).addClass('visible');
    },(i * (speed * 1000)));
  }

  $.fn.animateContent = function(options){
    // Find the form row elements within the content
    var rows = this.find('.frm-row'),
    // Declare the iterator and the length of the inner row items
    i, length = rows.length;
    // Loop through the rows and update the opacity
    for(i=0; i<length; i++){ animateItem(options.speed, rows[i], i); }
    //console.log(rows, options);
    return this;
  };
}(jQuery));
