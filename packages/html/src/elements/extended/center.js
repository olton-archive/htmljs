import Tag from "../core/tag"

export class Center extends Tag {
    constructor(children = "", options = {}) {
        let {style = {}} = options

        style.textAlign = "center"

        super(children, {...options, style});
    }
}

export const center = (children, options) => new Center(children, options)