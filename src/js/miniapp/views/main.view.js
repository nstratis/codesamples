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
 * @property {Array} winItems - The current window objects
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
	 * @function crteGrid
 	 * @description Generates the new grid component
	 * @memberof mainVw
	 */
	this.crteGrid = function(data, classArray){
		// Initialize the product grid
		this.objs.grid = app.productGrid.create('grid-container', {data:data.items, classArray:classArray});
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
