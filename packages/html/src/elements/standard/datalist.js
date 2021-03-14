import Tag from "../core/tag";

export class Datalist extends Tag {
    tag = 'datalist'
}

export const datalist = (children = '', options = {}) => new Datalist(children, options)