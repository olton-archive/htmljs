import Tag from "../core/tag";

export class Output extends Tag {
    tag = 'output'

    selfAttributes() {
        return ["for", "form", "name"]
    }
}

export const output = (children = '', options = {}) => new Output(children, options)