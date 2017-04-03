/*global debug, app, aim */
/*jslint plusplus:true, nomen:true */
/**
 * @class context
 * @description The main application context which initializes the default components
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Declare the application name space
var app = {};
app.context = aim.context.extend(function($super){
	"use strict";

	/**
	 * @function mapModels
	 * @description Map the model instances
	 * @memberof context
	 */
	this.mapModels = function(){ return; };

	/**
	 * @function mapServices
	 * @description Map the service instances
	 * @memberof context
	 */
	this.mapServices = function(){ return; };

	/**
	 * @function mapViews
	 * @description Map the view instances
	 * @memberof context
	 */
	this.mapViews = function(){
		// Map the main View which can control the entire wrapper content
		// and initilize any internal components
		this.map(app.mainVw);
	};

	/**
	 * @function mapCommands
	 * @description Map the command instances
	 * @memberof context
	 */
	this.mapCommands = function(){
		// Map the main startup command
		this.map(app.startUpCom, aim.STARTUP);
		// Map any other application commands that are required by default
	};
});
