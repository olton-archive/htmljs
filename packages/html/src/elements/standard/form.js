import Tag from "../core/tag";

export class Form extends Tag {
    tag = 'form'

    selfAttributes() {
        return ["accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"]
    }
}

export const form = (children = '', options = {}) => new Form(children, options)