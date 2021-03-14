import Tag from "../core/tag";

export class Sub extends Tag {
    tag = 'sub'
}

export const sub = (children = '', options = {}) => new Sub(children, options)