import BaseElement from "./elements/core/base"
import Tag from "./elements/core/tag"
import TagEmpty from "./elements/core/tag-empty"
import {render} from "./render"
import * as styleRoutines from "./style"
import * as html from "./elements"
import * as loaders from "./loaders"

window.html = {
    ...html,
    BaseElement,
    Tag,
    TagEmpty,
    render,
    ...loaders,
    ...styleRoutines,
}

window.__htmlSaver = {}

window.html.registerGlobal = () => {
    for (let key in window.html) {
        window.__htmlSaver[key] = window[key]
        window[key] = window.html[key]
    }
}

window.html.restoreGlobal = () => {
    for (let key in window.__htmlSaver) {
        window[key] = window.__htmlSaver[key]
    }
}


