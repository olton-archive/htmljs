import Tag from "../core/tag";

export class Abbr extends Tag {
    tag = "abbr"
}

export const abbr = (children = '', options = {}) => new Abbr(children, options)