/*! jQuery Reloadify - v0.2.0 - 2012-08-01
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
      *        url       : 'string',	// Required!
      *        poll_ms   : 1231,	// Poll every 1231 milliseconds instead of 1000.
      *        verbosity : 1,		// Only the interesting bits
      *     }
      * 
      * @return jQuery function for fluency.
      */
     $.reloadify = function( opts ) {
	 // If opts is a single string it's the URL.
         if (typeof(opts) === "string") { 
	     opts = {
		 url: opts
	     }; 
         }

	 // Default/overridable options, see
	 // http://docs.jquery.com/Plugins/Authoring#Defaults_and_Options
         var o = $.extend({
			      poll_ms: 1000,
			      last_data: '',
			      verbosity: 0,
			      ajaxOpts: {ifModified:true}
			  }, opts); 

         if (! o.url) {
             $.error( "No URL found in params passed to reloadify()!");
         }

	 var logify = function(loglevel, s) {
	     // Workaround for stupid old IEs.
	     if( typeof console !== "undefined" && 
		 console.log && 
		 o.verbosity >= loglevel ) {
		 console.log("jQuery.reloadify: " + s);
	     }
	 };
         
	 var pollify = function(){
	     $.ajax(o.url, o.ajaxOpts).
		 done(pollSuccess).
		 fail(function() {
			  $.error("jQuery.reloadify: Failed to GET "+ o.url);
		      });
	 };

	 var pollSuccess = function(data, textStatus, jqXHR) {
	     var status_code = (jqXHR ? jqXHR.status : 'no jqXHR WTF?!');

	     logify(2, "Success getting " + o.url + "! (" +
		    status_code + ", " +
		    (data ? data.length : 0) + " chars)");

	     logify(3, "DataType = " + this.dataType);
	     if (this.dataType && this.dataType === 'script') {
		 // The remote script defined a callback which we'll
		 // going to call here to get the content.
		 /*global global_jqueryreloadify_data */
		 data = global_jqueryreloadify_data;
	     }

	     if (data && data.length) {
		 logify(3, data.substring(0, 140));
	     }
	     
	     if ( status_code === 304 ) {
		 logify(1,'304 Not Modified');
	     }
	     else if (o.last_data !== '' && o.last_data !== data) {
		 logify(1,"RELOADIFYING");
		 window.location.reload(true);
	     }
	     else {
		 logify(1, '200 OK but no change or brand new content');
	     }
	     o.last_data = data;
	     setTimeout(pollify, o.poll_ms);
	 };

	 pollify();

         return this;
     };

 }(jQuery));
