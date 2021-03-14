import Tag from "../core/tag";

export class Textarea extends Tag {
    tag = 'textarea'

    selfAttributes() {
        return ["autofocus", "cols", "form", "maxlength", "name", "placeholder", "rows", "wrap"]
    }
}

export const textarea = (children = '', options = {}) => new Textarea(children, options)