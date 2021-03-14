import Tag from "../core/tag"

export class Flexbox extends Tag {
    tag = "div"

    constructor(children = "", options = {}) {
        let {style = {}, order = 0, justify = "flex-start", align = "stretch", content = "normal"} = options
        const flex = ["direction", "wrap", "flow", "grow", "shrink", "basis"]

        style.display = options.inline === true ? "inline-flex" : "flex"

        flex.forEach( v => {
            if (typeof options[v] !== "undefined") {
                style[`flex-${v}`] = options[v]
            }
        } )

        style.order = order
        style.justifyContent = justify
        style.alignItems = align
        style.alignContent = content

        super(children, {...options, style});
    }
}

export const flexbox = (children, options) => new Flexbox(children, options)