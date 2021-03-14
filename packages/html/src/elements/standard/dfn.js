import Tag from "../core/tag";

export class Dfn extends Tag {
    tag = 'dfn'
}

export const dfn = (children = '', options = {}) => new Dfn(children, options)