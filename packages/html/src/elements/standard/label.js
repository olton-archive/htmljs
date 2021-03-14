import Tag from "../core/tag";

export class Label extends Tag {
    tag = 'label'

    selfAttributes() {
        return ["for"]
    }
}

export const label = (children = '', options = {}) => new Label(children, options)
export const label2 = (_for = '', children = '', options = {}) => label(children, {...options, "for": _for})