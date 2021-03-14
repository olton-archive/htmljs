import Tag from "../core/tag";

export class Select extends Tag {
    tag = 'select'

    selfAttributes() {
        return ["autofocus", "form", "name", "size"]
    }
}

export const select = (children = '', options = {}) => new Select(children, options)

export class OptionGroup extends Tag {
    tag = 'optgroup'

    selfAttributes() {
        return ["label"]
    }
}

export const optgroup = (children = '', options = {}) => new OptionGroup(children, options)

export class Option extends Tag {
    tag = 'option'

    selfAttributes() {
        return ["label", "value"]
    }
}

export const option = (value = '', children = '', options = {}) => new Option(value, children, options)

