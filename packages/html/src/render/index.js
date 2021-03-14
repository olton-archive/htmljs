import {parser} from "../parser"

export const render = (model = [], mountTo = document.body, options = {}) => {
    let html, mount


    const {clear = false, where = 'beforeend'} = options

    mount = typeof mountTo === "string" ? document.querySelector(mountTo) : mountTo

    if (!mount) {
        mount = document.body
    }

    if (clear) {
        mount.innerHTML = ""
    }

    html = model.map( parser ).join("")
    mount.insertAdjacentHTML(where, html)
}