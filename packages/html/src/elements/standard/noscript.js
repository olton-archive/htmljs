import Tag from "../core/tag";

export class NoScript extends Tag {
    tag = 'noscript'
}

export const noscript = (children = '', options = {}) => new NoScript(children, options)