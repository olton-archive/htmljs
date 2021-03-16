import Tag from "../core/tag"
import {dashedName} from "../../common/dashed-name";

export class Grid extends Tag {
    constructor(children = '', options = {}) {
        let {style = {}} = options
        const props = ["gap", "templateRows", "templateColumns", "templateAreas", "autoRows", "autoColumns", "autoFlow"]

        style.display = "grid" // inline-grid ?

        props.forEach( v => {
            if (typeof options[v] !== "undefined") {
                style[`grid-${dashedName(v)}`] = options[v]
            }
        } )

        super(children, {...options, style})
    }
}

export const grid = (children, options) => new Grid(children, options)

export class GridItem extends Tag {
    constructor(children = '', options = {}) {
        let {style = {}} = options
        const props = ["rowStart", "rowEnd", "columnStart", "columnEnd", "area", "column", "row"]

        props.forEach( v => {
            if (typeof options[v] !== "undefined") {
                style[`grid-${dashedName(v)}`] = options[v]
            }
        } )

        super(children, {...options, style});

        if (options.tag) {
            this.tag = options.tag
        }
    }
}

export const gridItem = (children, options) => new GridItem(children, options)