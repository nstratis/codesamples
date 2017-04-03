/*global debug, app, aim */
/*jslint plusplus:true, nomen:true */
/**
 * @class mainVw
 * @description The application view component handling the base ui elements
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 * @property {String} NAME - The name reference for the object instance
 */
app.mainVw = aim.view.extend(function($super){
	"use strict";

	this.NAME = 'mainVw';

	/**
	* @function initialize
	* @description Override the initialize method so that events can be registered
	* @memberof mainVw
	*/
	this.initialize = function(){
		// Call the parent initialize method
		$super.initialize.call(this);
	};


	/**
	 * @function crteList
	 * @description Generates the comment elements based on the data provided
	 * this solution could have been made more scalable and inset lazy loading
	 * for large numbers of comments
	 * @memberof mainVw
	 * @param {Array} data - The data to populate the comment list with
	 */
	this.crteList = function(data){
		debug('mainVw.crteList()', data);
		// Initialize the comment list
		app.messageDisplay.create('message-display', {data:data.reviews});
	};

	/**
	 * @function crteList
	 * @description Generates the review section at the bottom of the page
	 * @memberof mainVw
	 */
	this.crteReview = function(){
		debug('mainVw.crteReview()');
		// Initialize the review component
		app.review.create('review-container');
	};

	/**
	 * @function render
	 * @description Renders the main elements of the ui and sets the references
	 * @memberof mainVw
	 */
	this.render = function(){
		debug('mainVw.render()');
		// Set the view element reference, this is the main wrapper of the application
		this.setView('#wrapper', true);
		// Check if this is a mobile device
		if(!aim.agent.mobile){
			this.view.addClass('no-tchdev');
		} else {
			// Check if this is a Win Platform
			if(aim.agent.platform === 'Win32' || aim.agent.platform === 'Win64'){
				this.view.addClass('no-tchdev');
			} else {
				this.view.addClass('tchdev');
			}
		}
	};
});
