# jQuery Reloadify

Caveman reloadification.

[Shortening the iteration](http://vimeo.com/36579366) is my favorite optimization of my workflow. [LiveReload](http://livereload.com/) is all amazing and everything but it makes assumptions like about things being reasonably modern and non-horrible and having websockets and having control of the outer HTML and actual files changing and so on.

This here, you give it a URL to poll, and when it sees that URL change, it will reload the whole entire page. Making that URL change is left as an exercise for the reader.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/n8v/jquery.reloadify/master/dist/jquery.reloadify.min.js
[max]: https://raw.github.com/n8v/jquery.reloadify/master/dist/jquery.reloadify.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.reloadify.min.js"></script>
<script>
jQuery(function($) {

  $().reloadify('my_url'); // Poll 'my_url' every 1 second and reload this
                         // here whole web page when that URL's content changes.


});
</script>
```

`my_url` is up to you. Make it change whenever you want the page to reload, like whenever you take a sip of coffee or touch a key or something. This supports 304 Not Modified codes just fine and it saves some bytes. Beware [the Same Origin Policy](http://en.wikipedia.org/wiki/Same_origin_policy)!

## Totally Advanced Options

If you have Special Needs of Great Impatience, give it a configuration object such as:

```js
  $().reloadify({
     url        : 'my_url',
     poll_ms    : 500,        // Poll every 500ms instead
     verbosity  : 11          // Turn console.log()ification up to 11!
  });

```

## Gruntification

See [this project's gruntfile](./grunt.js) for an example of a custom 'reloadify' task which can use [Grunt's](https://github.com/cowboy/grunt) `watch` feature to update a timestamp file (which can then trigger reloadification) whenever one of the files you're working on changes. So it's like,

0. Set up jquery.reloadify() on your page and point it to `reloadify.txt` in the dir next to your gruntfile.
1. Run `grunt watch` in a terminal.
2. Load your page containing `jquery.reloadify()` in one or more browsers (on any JS capable device).
3. Edit away... every time you save, grunt will build your stuff and trigger the browsers to refresh.

It's nice too because jshint and qunit should catch some of the syntax errors early in the build, and it won't make it to the browsers. If a JS error gets through to the browser you may have to refresh to get the reloadifier working again.

## Contributing

GIVE ME YOUR TIRED, YOUR POOR,

YOUR HUDDLED PULL REQUESTS YEARNING TO BREATHE FREE.

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
7/19/2012 - 0.1.0 - It just barely maybe works I think in at least one case! Time to call it a release!

## License
Copyright (c) 2012 Nathan Vonnahme  
Licensed under the MIT license.
