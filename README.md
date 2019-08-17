# eocNewsticker: A jQuery newsticker plugin

eocNewsticker is a fully responsive newsticker. It fits size and contents to any device and window size. It can be configured to read it's contents from the invoking HTML-document or from an AJAX-source (JSON or JSONP). If the latter is chosen, the newsticker is updated in a given interval on-the-fly.

## Requirements

jQuery 2.2.4 or higher

## Usage

1. Include the provided JS/CSS files

```html
<script src="eoc-newsticker.js"></script>
<link rel="stylesheet" href="eoc-newsticker.css">
```

2. Static or AJAX usage

Write your HTML Content (only for static use)

```html
<div id="example">The quick brown fox jumps over the lazy dog</div>
```

-OR-

Leave the HTML empty and provide a source for AJAX load (see example)

```html
<div id="example"></div>
```

3. Invoke the newsticker on your selected HTML Tag

```javascript
$(function() {
  $("#example").eocNewsticker();
});
```

4. Options

    * speed: The time it takes (in seconds) to move the text 1000px from right to left (normalized)
    * timeout: The time the slider waits after domready, before starting to run
    * divider: The signs used as a divider between the text blocks (if the text is not long enough to fill the whole width)
    * type:
      * static: Regular usage
      * ajax: Get contents with AJAX from a JSON file
    * source: AJAX source (URL)
    * dataType:
      * json: Regular JSON file from same domain
      * jsonp: JSONP from any source, can be cross-domain
    * callback: Used for jsonp
    * interval: Polling interval of the AJAX source

## License

Released under the MIT license - https://opensource.org/licenses/MIT