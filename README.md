# jQuery Reloadify

Caveman reloadification.

[Shortening the iteration](http://vimeo.com/36579366) is my favorite optimization of my workflow. [LiveReload](http://livereload.com/) is all amazing and everything but it makes assumptions like about things being reasonably modern and non-horrible and having websockets and having control of the outer HTML and actual files changing and so on.

This here, you give it a URL to poll, and when it sees the content of *that* URL change, it will reload *this* whole entire page. Making that URL change is left as an exercise for the reader.

There's no reason this should only be confined to development either - there might be any number of reasons you want to be able to trigger a whole page refresh for users.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/n8v/jquery.reloadify/master/dist/jquery.reloadify.min.js
[max]: https://raw.github.com/n8v/jquery.reloadify/master/dist/jquery.reloadify.js

In your totally awesome web page you're working on:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.reloadify.min.js"></script>
<script>
jQuery(function($) {

  // Poll 'my_url' every 1 second and reload this
  // here whole web page when that URL's content changes.
  $.reloadify('my_url'); 

});
</script>
```

`my_url` is up to you. 

- Relative URLs work great.
- Make it change whenever you want the page to reload, like whenever you take a sip of coffee or touch a key or something. 
- Or use a file watcher/build pipeline tool like [Grunt (see below)](#gruntification)
- This plugin supports 304 Not Modified codes just fine. It's a good idea; it saves some bytes. 
- Beware [the Same Origin Policy](http://en.wikipedia.org/wiki/Same_origin_policy) - but [see the "Remote" section below!](#triggering-from-a-remotecross-domain-file)

## Totally Advanced Options

If you have Special Needs, give it a configuration object such as:

```js
  $.reloadify({
     url        : 'my_url',
     poll_ms    : 500,        // Poll every 500ms instead
     verbosity  : 11,         // Turn console.log()ification up to 11!
     ajaxOpts   : {dataType: 'json'}  // Mess with jQuery Ajax options
  });

```

## Gruntification

See [this project's gruntfile](./grunt.js) for an example of a custom 'reloadify' task which can use [Grunt's](https://github.com/cowboy/grunt) `watch` feature to update a timestamp file (which can then trigger reloadification) whenever one of the files you're working on changes. So it's like,

0. Set up jquery.reloadify() on your page and point it to `reloadify.txt` in the dir next to your gruntfile.
1. Copy the reloadify task section out of [this gruntfile](./grunt.js) into yours, and modify the `default` and `watch` tasks to include it, as in the examples
2. Run `grunt reloadify` to manually trigger a reload.
3. Run `grunt watch` in a terminal.
4. Load your page containing `jquery.reloadify()` in one or more browsers (on any JS capable device).
5. Edit away... every time you save, grunt will build your stuff and trigger the browsers to refresh.

It's nice too because jshint and qunit should catch some of the syntax errors early in the build, and it won't make it to the browsers. If a JS error gets through to the browser you may have to refresh to get the reloadifier working again.

## Triggering from a remote/cross domain file

I know, the Same Origin Policy is inconvenient for stuff like this.

0. Make a JS file on your other server/domain/port that sets a global variable named `global_jqueryreloadify_data`:
```js
    // This is http://myotherserver.com/reloadifier_triggerator.js
    var global_jqueryreloadify_data = "2012-07-19T22:04:15.346Z";
```
This could be added to one of your existing files or include other code *as long as it's valid*, or you'll break stuff.

1. Tell reloadify to tell jQuery to do that remote `$.getScript()` thing:
```js
$.reloadify({
		url:  'http://myotherserver.com/reloadifier_triggerator.js',
		ajaxOpts: { dataType: 'script' }
	    });
```


## Contributing

GIVE ME YOUR TIRED, YOUR POOR,

YOUR HUDDLED PULL REQUESTS YEARNING TO BREATHE FREE.

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
8/1/2012 - 0.2.0 - Change to static function and undo some WTF.
7/19/2012 - 0.1.0 - It just barely maybe works I think at least for me and even in IE6! Time to call it a release!

## License
Copyright (c) 2012 Nathan Vonnahme  
Licensed under the MIT license.
