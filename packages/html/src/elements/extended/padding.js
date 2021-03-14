import Tag from "../core/tag"

export class Padding extends Tag {
    constructor(children = "", options = {}) {
        let {style = {}} = options
        const position = ["left", "right", "top", "bottom"]

        position.forEach( v => {
            if (typeof options[v] !== "undefined") {
                let val = options[v]
                style[`padding-${v}`] = isNaN(val) ? val : `${val}px`
            }
        } )

        super(children, {...options, style});
    }
}

export const padding = (children, options) => new Padding(children, options)