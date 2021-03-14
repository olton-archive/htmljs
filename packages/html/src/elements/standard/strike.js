import Tag from "../core/tag";

export class Strike extends Tag {
    tag = 'strike'
}

export const strike = (children = '', options = {}) => new Strike(children, options)
export const s = (children = '', options = {}) => new Strike(children, options)