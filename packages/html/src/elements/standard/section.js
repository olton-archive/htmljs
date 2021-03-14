import Tag from "../core/tag";

export class Section extends Tag {
    tag = 'section'
}

export const section = (children = '', options = {}) => new Section(children, options)