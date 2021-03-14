import Tag from "../core/tag";

export class Samp extends Tag {
    tag = 'samp'
}

export const samp = (children = '', options = {}) => new Samp(children, options)