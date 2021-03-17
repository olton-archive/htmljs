import BaseElement from "./elements/core/base"
import Tag from "./elements/core/tag"
import TagEmpty from "./elements/core/tag-empty"
import {render} from "./render"
import {addStyle, createStyleElement, createStyleSheet, addCssRule} from "./style"
import {jsLoader} from "./loader/js-loader"
import {cssLoader} from "./loader/css-loader"
import * as html from "./elements"

window.html = {
    ...html,
    addStyle,
    createStyleElement,
    createStyleSheet,
    addCssRule,
    render,
    BaseElement,
    Tag,
    TagEmpty,
    jsLoader,
    cssLoader
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


