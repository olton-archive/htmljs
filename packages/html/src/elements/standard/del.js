import Tag from "../core/tag";

export class Del extends Tag {
    tag = 'del'

    selfAttributes() {
        return ["cite", "datetime"]
    }
}

export const del = (children = '', options = {}) => new Del(children, options)