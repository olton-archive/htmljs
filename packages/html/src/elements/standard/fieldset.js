import Tag from "../core/tag";

export class Fieldset extends Tag {
    tag = 'fieldset'

    selfAttributes() {
        return ["form", "title"]
    }
}

export const fieldset = (children = '', options = {}) => new Fieldset(children, options)

export class Legend extends Tag {
    tag = 'legend'

    selfAttributes() {
        return ["align", "title"]
    }
}

export const legend = (children = '', options = {}) => new Legend(children, options)
