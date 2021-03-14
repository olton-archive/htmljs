import Tag from "../core/tag";

export class Anchor extends Tag {
    tag = 'a'

    selfAttributes() {
        return ["coords", "download", "hreflang", "name", "rel", "rev", "shape", "target", "type", "href"]
    }
}

export const anchor = (children = '', options = {}) => new Anchor(children, options)
export const a = (children = '', options = {}) => new Anchor(children, options)
export const anchor2 = (href = '#', children = '', options = {}) => new Anchor(children, {...options, href})