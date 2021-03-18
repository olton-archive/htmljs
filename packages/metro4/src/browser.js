import * as html from "./index"

const core = window.htmljs || {}

window.htmljs = {
    ...core,
    ...html
}
