import Tag from "../core/tag";

export class Blockquote extends Tag {
    tag = 'blockquote'

    selfAttributes() {
        return ["cite"];
    }
}

export const blockquote = (children = '', options = {}) => new Blockquote(children, options)