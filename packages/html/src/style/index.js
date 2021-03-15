import {setStyles} from "../common";

export const createStyleElement = (content = '', media) => {
    let style = document.createElement("style")

    if (media !== undefined) {
        style.setAttribute("media", media)
    }

    style.appendChild(document.createTextNode(content))
    document.head.appendChild(style)

    return style
}

export const createStyleSheet = (media) => {
    return createStyleElement(media).sheet
}

export const addCssRule = (sheet, selector, rules) => {
    sheet.insertRule(selector + "{" + rules + "}")
}

export const addStyle = (style, media) => {
    if (typeof style === "string") {
        createStyleElement(style, media)
        return
    }

    const sheet = createStyleSheet(media)
    for(let key in style) {
        addCssRule(sheet, key, setStyles(style[key]))
    }
}