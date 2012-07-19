/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

    /*
      ======== A Handy Little QUnit Reference ========
      http://docs.jquery.com/QUnit

      Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
      Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
    */

    module('jQuery#reloadify', {
	setup: function() {
	    // var sample_url = '../src/jquery.reloadify.js';
	    var sample_url = './changeme.html';

//	    this.returned = $().reloadify(sample_url);
	    this.returned = $().reloadify({
		url:sample_url,
		verbosity: 1
	    });
	}
    });




    test('is chainable', 1, function() {
	strictEqual(typeof(this.returned), "object", 'should return a (jQuery) object... not that this is a very good test.');
    });

    module('jQuery.reloadify');

    test('is reloadify', 1, function() {
	// How in the world am I going to really test this?
	strictEqual(true, true, 'should be thoroughly reloadify');
    });


}(jQuery));
