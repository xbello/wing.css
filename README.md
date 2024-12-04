# wing

A derivative of the original <a href="https://kbrsh.github.io/wing" target="_blank">wing.css</a>, with some added Django sugar. The `wing.css` file included here is almost a copy of the original at [5792c1cf1], with some small changes. The file is still 11kb raw, 7.5kb minified and **2kb** gzipped.

This repo doesn't use build tools or installers. It's just the `wing.css` file plus a minified version `wing.min.css`.

## "Install"

Download the `wing.min.css` file in the root directory to your own project. Then link it, for example with:

```html
<link rel="stylesheet" href="css/wing.min.css" />
```

You shouldn't need a CDN to serve such a small file.

### Dropdown

The element dropdown needs a little Javascript snippet to work. Grab the file `docs/js/wing.dropdown.js` to your own page, and add this to your Html:

```html
<html>
...

<script src="js/wing.dropdown.js"></script>
</body>
</html>
```

## [Docs / Kitchen sink](https://xbello.github.io/wing.css/)
