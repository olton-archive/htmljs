import BaseElement from "./elements/core/base"
import Tag from "./elements/core/tag"
import TagEmpty from "./elements/core/tag-empty"
import * as renders from "./render"
import * as styleRoutines from "./style"
import * as html_elements from "./elements"
import * as loaders from "./loaders"
import * as router from "./router"

globalThis.html = {
    BaseElement,
    Tag,
    TagEmpty,
    ...html_elements,
    ...renders,
    ...loaders,
    ...styleRoutines,
    ...router
}

globalThis.__htmlSaver = {}

globalThis.html.extract = (ctx = globalThis) => {
    for (let key in globalThis.html) {
        globalThis.__htmlSaver[key] = globalThis[key]
        ctx[key] = globalThis.html[key]
    }
}

globalThis.html.restore = (ctx = globalThis) => {
    for (let key in globalThis.__htmlSaver) {
        ctx[key] = globalThis.__htmlSaver[key]
    }
}


