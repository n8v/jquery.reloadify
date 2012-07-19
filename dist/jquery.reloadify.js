/*! jQuery Reloadify - v0.1.0 - 2012-07-18
* https://github.com/n8v/jquery.reloadify
* Copyright (c) 2012 Nathan Vonnahme; Licensed MIT */

/*global console */
(function($) {

/*
 * Set up reloadification on the current page.
 * 
 * @param opts String or Object. If it's a string, it signifies the URL
 *    jquery.reloadify should poll for changes every 1 second.
 * 
 * If it's an object it should be like this:
 * 
 *     { 
 *        url      : 'string', // Required!
 *        poll_ms  : 1231,  // Poll every 1231 milliseconds instead of 1000.
 *     }
 * 
 * @return jQuery object for fluency.
 */
     $.fn.reloadify = function( opts ) {
	 // If opts is a single string it's the URL.
         if (typeof(opts) === "string") { 
	     var u = opts;
	     opts = {
		 url: u
	     }; 
         }

	 // Default/overridable options, see
	 // http://docs.jquery.com/Plugins/Authoring#Defaults_and_Options
         var o = $.extend({
			      poll_ms: 1000,
			      last_data: ''
			  }, opts); 

         if (! o.url) {
             $.error( "No URL found in params passed to reloadify()!");
         }
         
	 var pollAndWait = function(){
	     $.get(o.url).
		 done(pollify).
		 fail(function() {console.warn("Failed to get "+ o.url);});
	 };


	 var pollify = function(data, textStatus, jqXHR) {
	     console.log("Success getting " + o.url + "!");
	     console.log(data.substring(0, 140));
	     if (o.last_data !== '' && o.last_data !== data) {
		 console.log("RELOADIFYING");
		 window.location.reload(true);
	     }
	     o.last_data = data;
	     var timeoutId = window.setTimeout();
	     window.setTimeout(pollAndWait, o.poll_ms);
	 };

	 pollAndWait();


         return this;
     };

}(jQuery));
