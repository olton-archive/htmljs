import Tag from "../core/tag";

export class Small extends Tag {
    tag = 'small'
}

export const small = (children = '', options = {}) => new Small(children, options)