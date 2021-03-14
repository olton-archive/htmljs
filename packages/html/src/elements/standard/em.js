import Tag from "../core/tag";

export class Em extends Tag {
    tag = 'em'
}

export const em = (children = '', options = {}) => new Em(children, options)