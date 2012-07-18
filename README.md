# jQuery Reloadify

Caveman reloadification.

[Shortening the iteration](http://vimeo.com/36579366) is my favorite optimization of my workflow. [LiveReload](http://livereload.com/) is all amazing and everything but it makes assumptions like about things being reasonably modern and non-horrible.

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
  $.awesome(); // "awesome"
});
</script>
```

## Documentation
_(Coming soon)_

Use Docco.

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Nathan Vonnahme  
Licensed under the MIT license.
