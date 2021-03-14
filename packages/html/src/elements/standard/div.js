import Tag from "../core/tag";

export class Div extends Tag {
    tag = 'div'

    selfAttributes() {
        return ["align", "title"]
    }
}

export const div = (children = '', options = {}) => new Div(children, options)