import Tag from "../core/tag";

export class Pre extends Tag {
    tag = 'pre'
}

export const pre = (children = '', options = {}) => new Pre(children, options)