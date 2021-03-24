import {parser} from "../parser"

export const render = (view = [], mountTo = document.body, options = {}) => {
    let html, mount


    const {clear = true, where = 'beforeend'} = options

    mount = typeof mountTo === "string" ? document.querySelector(mountTo) : mountTo

    if (!mount) {
        mount = document.body
    }

    if (clear) {
        mount.innerHTML = ""
    }

    if (!Array.isArray(view)) {
        view = [view]
    }

    html = view.map( parser ).join("")
    mount.insertAdjacentHTML(where, html)
}