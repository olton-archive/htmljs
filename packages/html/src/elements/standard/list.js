import Tag from "../core/tag";

export class List extends Tag {
    constructor(tag = 'ul', children = '', options = {}) {
        super(children, options);
        this.tag = tag
    }

    selfAttributes() {
        return this.tag === 'ul'
            ? ["type"]
            : ["type", "reserved", "start"]
    }
}

export class ListItem extends Tag {
    tag = "li"

    selfAttributes() {
        return ["type", "value"]
    }
}

export const ul = (children = '', options = {}) => new List('ul', children, options)
export const ol = (children = '', options = {}) => new List('ol', children, options)
export const li = (children = '', options = {}) => new ListItem(children, options)
