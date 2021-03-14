import Tag from "../core/tag";

export class Var extends Tag {
    tag = 'var'
}

export const variable = (children = '', options = {}) => new Var(children, options)