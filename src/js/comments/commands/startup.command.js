/*global debug, aim, app */
/*jslint plusplus:true, nomen:true */
/**
 * @class startUpCom
 * @description The main request application startup command
 * @copyright (c) Copyright 2013 - 2016 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 * @property {String} NAME - The name reference for the object instance
 */
app.startUpCom = aim.command.extend(function($super){
	"use strict";
	// Set the name reference for the command
	this.NAME = "startUpCom";
	/**
	 * @function execute
	 * @description Execute the startup functionality for the application
	 * @memberof ldModCom
	 * @param {object} data - The data to pass to the function
	 */
	this.execute = function(){
		debug('startUpCom.execute()');
		// Update the preloader message
		this.dispatch(app.PRLR_SHW, {percent:40});
		// Render the main app view object
		var view = this.view('mainVw');
		// Execute the request for the data, this ultimately be done in the
		// React list component however I prefer having a reference stored
		// which is accessible for additional components which may exist
		aim.ajax.send({
		  type:'GET',
		  url:'../data/messages.json',
			dataType:'json',
		  // Success handler for the ajax request
		  success:function(data){
				debug('data', data);
				// Render the components in the dom
				view.crteList(data);
				// Render the new review section
				view.crteReview();
		  },
			error:function(e){
				// Do something else as there was an error
				return;
			},
			encode:'none'
		});
	};
});
