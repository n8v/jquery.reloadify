/* -*- js2 -*-
 * 
 * jquery.reloadify
 * https://github.com/n8v/jquery.reloadify
 *
 * Copyright (c) 2012 Nathan Vonnahme
 * Licensed under the MIT license.
 */

(function($) {

    var methods = {
        init: function(opts) {
            var o = {}; // Default options
            if (typeof(opts) === "string") {
                o.url = opts;
            }
            else if (typeof(opts) === "Object" && opts.url) {
                o.url = opts.url;               
            }
            if (! o.url) {
                $.error( "No URL found in params passed to reloadify()!");
            }
            
            return this;
        }
    };

    $.fn.reloadify = function( method ) {
        
        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            return $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }    
        
    };


}(jQuery));
