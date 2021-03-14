import Tag from "../core/tag";

export class Script extends Tag {
    tag = 'script'

    selfAttributes() {
        return ["async", "defer", "language", "src", "type"]
    }
}

export const script = (children = '', options = {}) => new Script(children, options)
export const script2 = (src = '', children = '', options = {}) => script(children, {...options, src})