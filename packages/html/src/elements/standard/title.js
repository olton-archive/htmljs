import Tag from "../core/tag";

export class Heading extends Tag {
    constructor(tag = 'h1', children = '', options = {}) {
        super(children, options);
        this.tag = tag
    }
}

export const heading = (tag = 'h1', children = '', options = {}) => new Heading(tag, children, options)
export const h1 = (children = '', options = {}) => heading('h1', children, options)
export const h2 = (children = '', options = {}) => heading('h2', children, options)
export const h3 = (children = '', options = {}) => heading('h3', children, options)
export const h4 = (children = '', options = {}) => heading('h4', children, options)
export const h5 = (children = '', options = {}) => heading('h5', children, options)
export const h6 = (children = '', options = {}) => heading('h6', children, options)
