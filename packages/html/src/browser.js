import BaseElement from "./elements/core/base"
import Tag from "./elements/core/tag"
import TagEmpty from "./elements/core/tag-empty"
import {render} from "./render"
import * as styleRoutines from "./style"
import * as html from "./elements"
import * as loaders from "./loaders"
import * as router from "./router"

globalThis.htmljs = {
    ...html,
    BaseElement,
    Tag,
    TagEmpty,
    render,
    ...loaders,
    ...styleRoutines,
    ...router
}

globalThis.__htmlSaver = {}

globalThis.htmljs.registerGlobal = (ctx = globalThis) => {
    for (let key in globalThis.htmljs) {
        globalThis.__htmlSaver[key] = globalThis[key]
        ctx[key] = globalThis.htmljs[key]
    }
}

globalThis.htmljs.restoreGlobal = (ctx = globalThis) => {
    for (let key in globalThis.__htmlSaver) {
        ctx[key] = globalThis.__htmlSaver[key]
    }
}


