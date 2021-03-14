import Tag from "../core/tag";

export class Title extends Tag {
    constructor(tag = 'h1', children = '', options = {}) {
        super(children, options);
        this.tag = tag
    }
}

export const title = (tag = 'h1', children = '', options = {}) => new Title(tag, children, options)
export const h1 = (children = '', options = {}) => new Title('h1', children, options)
export const h2 = (children = '', options = {}) => new Title('h2', children, options)
export const h3 = (children = '', options = {}) => new Title('h3', children, options)
export const h4 = (children = '', options = {}) => new Title('h4', children, options)
export const h5 = (children = '', options = {}) => new Title('h5', children, options)
export const h6 = (children = '', options = {}) => new Title('h6', children, options)
