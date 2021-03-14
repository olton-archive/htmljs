import Tag from "../core/tag";

export class Kbd extends Tag {
    tag = 'kbd'
}

export const kbd = (children = '', options = {}) => new Kbd(children, options)