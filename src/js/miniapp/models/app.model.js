/*global debug, app, aim */
/*jslint plusplus:true, nomen:true */
/**
 * @class appMdl
 * @description The main application module which currently stores the module information
 * @copyright (c) Copyright 2013 - 2016 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 * @property {String} NAME - The name reference for the object instance
 * @property {String} MODS - The modules module object reference name
 */
app.appMdl = aim.model.extend(function($super){
	"use strict";

	// Set the name reference
	this.NAME = "appMdl";
	// Lookup BKES
	this.BKES = "Bikes";

	/**
	 * @function initialize
 	 * @description Initializes the model and creates the default model objects
	 * @memberof appMdl
	 */
	this.initialize = function(){
		// Call the parent initialize method
		$super.initialize.call(this, arguments);
		// Create the varied lookup models
		this.create(false, this.BKES);
	};

	/**
	 * @function streBikes
	 * @description Saves the bike date for referencing across the application
	 * @memberof appMdl
	 * @param {String} data - The bike data
	 */
	this.streBikes = function(data){
		debug(data);
		// Store the bikes in the model
		this.setData(this.BKES, data.items);
	};

	/**
	 * @function getList
	 * @description Get the list of items
	 * @memberof appMdl
	 */
	this.getList = function(){
		var classes = [];
		// Loop through the data
		this.each(this.BKES, function(item){
			classes = classes.concat(item.class);
		});
		// Clean the duplicates from the array
		classes = aim.util.cleanDuplicates(classes);
		return classes;
	};
});
