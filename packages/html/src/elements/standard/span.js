import Tag from "../core/tag";

export class Span extends Tag {
    tag = 'span'
}

export const span = (children = '', options = {}) => new Span(children, options)