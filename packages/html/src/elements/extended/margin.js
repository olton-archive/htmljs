import Tag from "../core/tag"

export class Margin extends Tag {
    constructor(children = "", options = {}) {
        let {style = {}} = options
        const position = ["left", "right", "top", "bottom"]

        position.forEach( v => {
            if (typeof options[v] !== "undefined") {
                let val = options[v]
                style[`margin-${v}`] = isNaN(val) ? val : `${val}px`
            }
        } )

        super(children, {...options, style});
    }
}

export const margin = (children, options) => new Margin(children, options)