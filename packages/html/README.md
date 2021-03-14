# Welcome to HtmlJS

HtmlJS - is a library to create a site in pure JavaScript. The one contains functions to create html tags.
You can use HtmlJS with Webpack, Parcel or other builders or directly for using in the browser with pre-build version. 


## Using with Webpack, Parcel, ...

Create a simple index:
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

Add structure in view, and render it:
```javascript
// view.js
import {h1, section, header, main, footer, p} from "./src"

export const articleView = article([
    h1("This is a title"),
    h2("This is a subtitle", {id: "mySubTitle", className: "class-1", style:{"font-size":"11pt", "color": "red"} } ),
    section([
        p(`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus aliquam culpa debitis distinctio nesciunt?
            Aliquid animi atque blanditiis, explicabo facilis magnam
            modi nihil nostrum nulla perspiciatis qui recusandae sed, vero!
        `)
    ])
])

export const view = [
    header('header'),
    main([articleView]),
    footer('footer')
]

// index.js
import {articleView, view} from "./view"
import render from "../src"

render(view, document.querySelector('#app'));
```

### Browser mode
Also, you can use `render` directly
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="app"></div>
    <script src="../lib/html.js"></script>
    <script>
        (function(){
            html.registerGlobal();

            const articleView = article([
                h1("This is a title"),
                h2("This is a subtitle", {id: "mySubTitle", className: "class-1", style:{"font-size":"11pt", "color": "red"} } ),
                section([
                    p(`
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus aliquam culpa debitis distinctio nesciunt?
                        Aliquid animi atque blanditiis, explicabo facilis magnam
                        modi nihil nostrum nulla perspiciatis qui recusandae sed, vero!
                    `)
                ])
            ])

            const view = [
                header('header'),
                main([articleView]),
                footer('footer')
            ]

            render(view, document.querySelector('#app'));

            html.restoreGlobal();
        })()
    </script>
</body>
</html>
```

### Extend standard HTML components for any libs and frameworks

You can create extensions for any libs and frameworks. For example [Metro4-HtmlJS](https://github.com/olton/Metro4-HtmlJS)

Create a wrapper for Metro 4 accordion:

```javascript
import {Div} from "@olton/htmljs"
import {addRole, addClasses} from "../helpers"; // Funcs inside a Metro4-HtmlJS

export class Accordion extends Div {
    constructor(children = '', options = {}) {
        super(children, addRole('accordion', options))
    }
}

export const accordion = (children = '', options = {}) => new Accordion(children, options)

export class AccordionFrame extends Div {
    constructor(title = '', children = '', options = {}) {
        const className = addClasses('frame', options.className)
        super(children, {...options, className})
        this.title = title
    }

    template(content){
        return `
            <${this.tag} ${this.attributes().join(" ")} ${this.events}>
                <div class="heading">${this.title}</div>
                <div class="content">${content}</div>
            </${this.tag}>
        `
    }
}

export const accordionFrame = (title, children, options) => new AccordionFrame(title, children, options)
```

## HtmlJS - set of HTML tags as js functions
HtmlJS contains different functions to create HTML tags. All functions divided into two type: `Tag` - can contain a children, `TagEmpty` - can't contain a children.
For example: 

- `section(...)` correspond to HTML tag `<section>...</section>`. This tag can contain children inside.
- `br(...)` correspond to `<br>`. This tag can't contain children.

### Supported tags
HtmlJS supports almost all HTML tags.

#### TagEmpty

- `area()`
- `img()`, `image()`
- `br()`
- `frame()`
- `hr()`
- `input()`
- `source()`
- `col()`
- `colgroup()`
- `track()`
- `wbr()`

#### Tag

- `canvas()`
- `abbr()`
- `address()`
- `a()`, `anchor()`
- `article()`
- `aside()`
- `audio()`
- `bdi()`
- `bdo()`
- `blockquote()`
- `b()`, `bold()`
- `button()`
- `cite()`
- `code()`
- `datalist()`
- `dl()`, `dt()`, `dd()`
- `del()`,
- `details()`, `summary()`
- `dfn()`,
- `div()`,
- `em()`,
- `embed()`, `noembed()`,
- `fireldset()`, `legend()`
- `figure()`, `figcaption()`
- `footer()`,
- `form()`,
- `frameset()`, `noframes()`
- `header()`
- `iframe()`
- `ins()`
- `i()`, `ital()`
- `kbd()`,
- `label()`
- `ul()`, `ol()`, `li()`
- `main()`
- `map()`
- `mark()`
- `nav()`
- `noscript()`
- `output()`
- `p()`, `paragraph()`
- `pre()`
- `q()`, `quoted()`
- `samp()`
- `script()`
- `section()`
- `select`, `option()`, `optiongroup()`
- `small()`
- `span()`
- `s()`, `strike()`,
- `strong()`,
- `sub()`
- `sup()`
- `table()`, `caption()`, `col()`, `colgroup()`, `thead()`, `tbody()`, `tfoot()`, `th()`, `td()`, `tr()`
- `textarea()`
- `time()`
- `h1()`, `h2()`, `h3()`, `h4()`, `h5()`, `h6()`,
- `variable()`
- `video()`

#### Extends
- `flexbox()`
- `padding()`
- `margin()`

### Render
THe main function - `render(mode, mountPoint, options)`. This function receive `view` as array of HTML tag functions and `element` where view will be added.

```javascript
import {render} from "./src";

const view = [/*...*/]

render(view, document.body, {clear: true, where: 'beforeend'})
```

#### Render options
You can set additional options to `render` with third argument. This argument is a plain object:
```javascript
// Default values
const options = {
    clear: false, // clear target before insert html
    where: 'beforeend' // where render must insert elements.  
}
```
Available values for **where**: `beforebegin`, `afterbegin`, `beforeend`, `afterend`.

### Model
HtmlJS use **view as array** to definition HTML structure. You can define sub-view to create reusable components.  

```javascript
import {main, header, footer} from "./src"

const view = [
    header(),
    main(),
    footer()
]
```

### Function arguments
All functions inherited from a `TagEmpty` receive one argument as object - `options = {...}`.
A functions inherited from `Tag` receive two arguments, and more. For example:

- `hr(options)`
- `section(children, options)`
- `anchor(href, children, options)`
- `input(value, options)`
- `audio(src, children, options)`

#### Argument - children
Argument `children` can be:

- String
- Array of other tags functions
- Tag function
- Sub-view

#### Argument - options
Argument `options` defines any tag attributes. All attributes can simple `key = value` or complex - `key = {...}`.
Complex attributes include: 

- `data` - defines a `data-*` attributes
- `events` - defines a tag `events`
- `style` - defines a additional element `css styles`