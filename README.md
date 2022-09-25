# eocjsNewsticker: A jQuery newsticker plugin

eocjsNewsticker is a fully responsive newsticker. It adjusts size and content to any device and window size. It can be configured to read it's contents from the invoking HTML document or from an AJAX-source (JSON or JSONP). If AJAX is chosen, the newsticker is updated in a given interval on-the-fly.

## Requirements

jQuery 3.5.1

## Usage

1. Include the provided JS/CSS files

```html
<script src="eocjs-newsticker.js"></script>
<link rel="stylesheet" href="eocjs-newsticker.css">
```

2. Static or AJAX usage

Write your HTML content (only for static use)

```html
<div id="example">The quick brown fox jumps over the lazy dog</div>
```

-OR-

Leave the HTML empty and provide a source for AJAX load (see example)

```html
<div id="example"></div>
```

3. Invoke the newsticker on your selected HTML tag

```javascript
$("#example").eocjsNewsticker();
```

4. Options

  * speed: The time it takes (in seconds) to move the text 1000px from right to left (normalized) (default: 20)
  * timeout: The time the slider waits after domready, before starting to run (default: 1)
  * divider: The signs used as a divider between the text blocks (default: +++)
  * type:
    * static: Regular usage (default)
    * ajax: Get contents with AJAX from a JSON file
  * source: AJAX source (URL)
  * fetch: Use fetch method instead of jQuery ajax (default: false)
  * interval: Polling interval of the AJAX source (default: 120)
  * direction:
    * ltr: Left-to-right language scrolling (default)
    * rtl: Right-to-left language scrolling

## Example

Here are some working <a href="https://nightside.de/eocjs-newsticker/example.html">eocjsNewsticker examples</a>.

## License

Released under the MIT license - https://opensource.org/licenses/MIT
