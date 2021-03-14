import Tag from "../core/tag";

export class Details extends Tag {
    tag = 'details'
}

export const details = (children = '', options = {}) => new Details(children, options)

export class Summary extends Tag {
    tag = 'summary'
}

export const summary = (children = '', options = {}) => new Summary(children, options)

