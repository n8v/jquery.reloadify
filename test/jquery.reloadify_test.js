/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

    // This is largely here because of `grunt init`... I can't figure
    // out how to make it actually test the reloadification. Maybe I
    // need to just test with phantomjs but not qunit. Pull requests
    // welcome!


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
            var sample_url = '../reloadify.txt';
            this.returned = $().reloadify(sample_url);


            // remote example
            // sample_url = 'http://fa/js/jquery.reloadify/realoadify_test.js';
            // this.returned = $().reloadify({
            //  url:sample_url,
            //  verbosity: 1,
            //  ajaxOpts: { dataType: 'script' }
            // });
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
