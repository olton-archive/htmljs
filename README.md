# Welcome to HtmlJS

**HtmlJS** - is a library to create a site in pure JavaScript. The one contains functions to create html tags.
You can use **HtmlJS** with Webpack, Parcel or other builders or directly for using in the browser with pre-build version. 

**HtmlJS** is a monorepo with parts:

- [x] `html` - standard **HTML** elements and simple extends (`center`, `padding`, `flexbox`, ...)
- [ ] `metro` - wrappers for Metro 4 components
- [ ] `bootstrap` - wrappers for Bootstrap components

## Using example

### Browser

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div id="app"></div>
<script src="../../lib/html.js"></script>
<script>
    (function(){
        html.registerGlobal();

        const view = [
            center(
                h1("Welcome to HtmlJS!")
            ),
        ]

        render(view, document.querySelector('#app'));

        html.restoreGlobal();
    })()
</script>
</body>
</html>
```

### Webpack