import Tag from "../core/tag";

export class Button extends Tag {
    tag = 'button'

    selfAttributes() {
        return ["autofocus", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"]
    }
}

export const button = (children = '', options = {}) => new Button(children, options)