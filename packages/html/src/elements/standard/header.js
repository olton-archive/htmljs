import Tag from "../core/tag";

export class Header extends Tag {
    tag = 'header'
}

export const header = (children = '', options = {}) => new Header(children, options)