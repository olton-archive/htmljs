import {parser} from "../parser"

export const render = (view = [], renderTo = document.body, options = {}) => {
    let html, renderPoint


    const {clear = true, where = 'beforeend'} = options

    renderPoint = typeof renderTo === "string" ? document.querySelector(renderTo) : renderTo

    if (!renderPoint) {
        renderPoint = document.body
    }

    if (clear) {
        renderPoint.innerHTML = ""
    }

    if (!Array.isArray(view)) {
        view = [view]
    }

    html = view.map( parser ).join("")
    renderPoint.insertAdjacentHTML(where, html)
}