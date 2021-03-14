import Tag from "../core/tag";

export class Ins extends Tag {
    tag = 'ins'

    selfAttributes() {
        return ["cite", "datetime"]
    }
}

export const ins = (children = '', options = {}) => new Ins(children, options)