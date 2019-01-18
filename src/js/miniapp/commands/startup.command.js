/*global debug, app, aim */
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
app.startUpCom = aim.command.extend(function($super) {
	"use strict";
	// Set the name reference for the command
	this.NAME = "startUpCom";
	/**
	 * @function execute
	 * @description Execute the startup functionality for the application
	 * @memberof ldModCom
	 * @param {object} data - The data to pass to the function
	 */
	this.execute = function() {
		debug('startUpCom.execute()');
		// Update the preloader message
		this.dispatch(app.PRLR_SHW, {percent:40});

		// Render the main app view object
		var self = this, view = this.view('mainVw');

	 	// Execute the request for the data, this ultimately be done in the
		// React grid component however I prefer having a reference stored
		// which is accessible for additional components which may exist
    aim.ajax.send({
      type:'GET',
      url:'../data/bikes.json',
			dataType:'json',
      // Success handler for the ajax request
      success:function(data){
				// // So that it is accessible to other components store the data
				self.model('appMdl').streBikes(data);
				// Get the list of Classes for the select menu
				var classArray = self.model('appMdl').getList();
				// // Render the grid
				view.crteGrid(data, classArray);
				// Dispatch to hide the preloader
				self.dispatch(app.PRLR_HDE);
      },
			error:function(e){
				// Dispatch to hide the preloader
				self.dispatch(app.PRLR_HDE);
				// Do something else as there was an error
			},
			encode:'none'
    });
	};
});
