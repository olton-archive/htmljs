import Tag from "../core/tag";

export class Canvas extends Tag {
    tag = 'canvas'

    selfAttributes() {
        return ["width", "height"]
    }
}

export const canvas = (children = '', options = {}) => new Canvas(children, options)