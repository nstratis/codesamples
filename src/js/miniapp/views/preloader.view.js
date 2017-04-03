/*global debug, app, aim */
/*jslint plusplus:true, nomen:true */
/**
 * @class prlrVw
 * @description The main application preloader view component
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 * @property {String} NAME - The name reference for the object instance
 */
app.prlrVw = aim.view.extend(function($super){
	"use strict";
	// Set the name reference for the object, important and must always be included
	this.NAME = 'prlrVw';
	/**
	 * @function initialize
 	 * @description Override the initialize method so that events can be registered
	 * @memberof prlrVw
	 */
	this.initialize = function(){
		// Register required notifications
		this.register(app.PRLR_SHW, this.showView, this);
		this.register(app.PRLR_HDE, this.hideView, this);
		// Call the parent initialize method
		$super.initialize.call(this);
	};

	/**
	 * @function showView
 	 * @description Show the preloader view
	 * @memberof prlrVw
	 * @param {Object} data - An optional data object containing a message string
	 * and/or a percentage value for the bar
	 */
	this.showView = function(data){
		// Determine if there is a message to set
		if(data !== undefined){
			// Determine if there is a message to show
			if(data.message !== undefined){
				// Update the preloader message
				aim.dom.html(this.els.message, data.message);
			}
			// Determine if there is a percentage value for the bar
			if(data.percent !== undefined){
				// Set the width of the loader bar
				//this.elements.bar.css({width:data.percent + "%"});
				aim.dom.css(this.els.bar, {width:data.percent + "%"});
			}
		// The data was undefined
		} else {
			// Clear any previous messages
			aim.dom.empty(this.els.message);
			aim.dom.css(this.els.bar, {width:"100%"});
		}
		// Add the visible class to the preloader
		this.show('visible');
	};

	/**
	 * @function hideView
 	 * @description Hide the preloader view
	 * @memberof prlrVw
	 */
	this.hideView = function(){
		// Remove the visible class from the view
		this.hide('visible');
	};

	/**
	 * @function render
 	 * @description Render the preloader view and set the references to the elements
	 * @memberof prlrVw
	 */
	this.render = function(){
		// Set the reference to the preloader html object
		this.setView('#app-preloader', false);
		// Get the preloader display bar
		this.els.bar = this.find('div.ldr-bar', false);
		// Set the message element reference
		this.els.message = this.find('span', false);
	};
});
