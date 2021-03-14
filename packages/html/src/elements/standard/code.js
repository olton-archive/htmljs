import Tag from "../core/tag";

export class Code extends Tag {
    tag = 'code'
}

export const code = (children = '', options = {}) => new Code(children, options)