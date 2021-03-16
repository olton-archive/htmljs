import * as html from "./index"

const core = window.html || {}

window.html = {
    ...core,
    ...html
}

// if (!window.__metroHtmlSaver) window.__metroHtmlSaver = {}
//
// window.metroHtml.registerGlobal = () => {
//     for (let key in window.metroHtml) {
//         window.__metroHtmlSaver[key] = window[key]
//         window[key] = window.metroHtml[key]
//     }
// }
//
// window.metroHtml.restoreGlobal = () => {
//     for (let key in window.__metroHtmlSaver) {
//         window[key] = window.__metroHtmlSaver[key]
//     }
// }