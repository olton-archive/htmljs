import Tag from "../core/tag";

export class Paragraph extends Tag {
    tag = 'p'

    selfAttributes() {
        return ["align"]
    }
}

export const paragraph = (children = '', options = {}) => new Paragraph(children, options)
export const p = (children = '', options = {}) => new Paragraph(children, options)