import Tag from "../core/tag";

export class Footer extends Tag {
    tag = 'footer'
}

export const footer = (children = '', options = {}) => new Footer(children, options)