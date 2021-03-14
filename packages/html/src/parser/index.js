import BaseElement from "../elements/core/base"

export const parser = element => {
    if (Array.isArray(element)) {
        return element.map( parser ).join("")
    } else if (typeof element === 'string') {
        return element
    } else if (element.draw) {
        return element.draw()
    }
    throw new Error("Unknown element! " + element)
}