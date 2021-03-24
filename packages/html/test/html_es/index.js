import 'regenerator-runtime/runtime'
import {render, router, header, flexbox, a, center, h1} from "../../src"
import {addStyle} from "../../src";

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
    const view = [text]
    render(view, "#h1")
}

router()
    .addRoutes({
        "/": () => renderPage('root'),
        "/contacts": () => renderPage('contacts'),
        "/catalog/:category/:product": () => renderPage('products')
    })
    .listen()
    .exec()

