# Welcome to HtmlJS

**HtmlJS** - is a library to create a site in pure JavaScript. The one contains functions to create html tags.
You can use **HtmlJS** with Webpack, Parcel or other builders or directly for using in the browser with pre-build version. 

**HtmlJS** is a monorepo with parts:

- [x] `html` - standard **HTML** elements (`h1`, `p`, `div`, ...) and simple extends (`center`, `padding`, `flexbox`, ...)
- [ ] `metro` - wrappers for [Metro 4](https://metroui.org.ua) components
- [ ] `bootstrap` - wrappers for [Bootstrap](https://getbootstrap.com) components

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

        addStyle({
            "body, #app": {
                height: "100vh"
            },
            "body": {
                background: "#ccc",
                margin: 0,
                padding: 0
            }
        })

        const view = [
            flexbox([
                h1("Welcome to HtmlJS!"),
                figureSimple("https://picsum.photos/200", "Caption", "alt")
            ], {
                justify: "center",
                align: "center",
                direction: "column",
                style: {
                    height: "100%"
                }
            }),
        ]

        render(view, document.querySelector('#app'));

        html.restoreGlobal();
    })()
</script>
</body>
</html>
```

### Parcel, SPA example 
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
<script src="index.js"></script>
</body>
</html>
```
and
```javascript
import 'regenerator-runtime/runtime' // this required for Parcel
import {addStyle, render, router, header, flexbox, a, center, h1} from "../../src"

addStyle({
    "body": {
        margin: 0,
        padding: 0
    },

    a: {
        margin: "10px"
    }
})

const view = [
    header([
        flexbox([
            a('/', 'Home'),
            a('/contacts', 'Contacts'),
            a('/catalog/category1/product2', 'Product'),
        ], {
            justify: "center"
        })
    ]),
    center(
        h1("", {id: "h1"})
    )
]

render(view, "#app")

const renderPage = (text) => {
    render([text], "#h1")
}

router()
    .addRoutes({
        "/": () => renderPage('root'),
        "/contacts": () => renderPage('contacts'),
        "/catalog/:category/:product": () => renderPage('products')
    })
    .listen()
    .exec()
```