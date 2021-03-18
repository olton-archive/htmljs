import BaseElement from "./elements/core/base"
import Tag from "./elements/core/tag"
import TagEmpty from "./elements/core/tag-empty"
import {render} from "./render"
import * as styleRoutines from "./style"
import * as html from "./elements"
import * as loaders from "./loaders"

window.htmljs = {
    ...html,
    BaseElement,
    Tag,
    TagEmpty,
    render,
    ...loaders,
    ...styleRoutines,
}

window.__htmlSaver = {}

window.htmljs.registerGlobal = () => {
    for (let key in window.htmljs) {
        window.__htmlSaver[key] = window[key]
        window[key] = window.htmljs[key]
    }
}

window.htmljs.restoreGlobal = () => {
    for (let key in window.__htmlSaver) {
        window[key] = window.__htmlSaver[key]
    }
}


