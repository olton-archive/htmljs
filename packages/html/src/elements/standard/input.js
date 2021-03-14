import TagEmpty from "../core/tag-empty";

export class Input extends TagEmpty {
    tag = "input"

    selfAttributes() {
        return [
            "accept", "align", "alt", "autocomplete", "autofocus", "border", "checked", "disabled", "form", "formaction",
            "formenctype", "formmethod", "formnovalidate", "formtarget", "list", "max", "maxlength", "min", "multiple",
            "name", "pattern", "placeholder", "size", "src", "step", "type", "value"
        ]
    }
}

export const input = (options = {}) => new Input(options)
export const input2 = (value = '', options = {}) => new Input({...options, value})