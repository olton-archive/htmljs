import Tag from "../core/tag";

export class Quoted extends Tag {
    tag = 'q'

    selfAttributes() {
        return ["cite"]
    }
}

export const q = (children = '', options = {}) => new Quoted(children, options)
export const quoted = (children = '', options = {}) => new Quoted(children, options)