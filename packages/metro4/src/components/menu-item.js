import {ListItem} from "@htmljs/html";

export class MenuItem extends ListItem {
    constructor(href = '', children = '', options = {}) {
        super(children, options)
        this.href = href
    }

    template(content) {
        const href = this.href ? `href="${this.href}"` : ``
        return `
            <${this.tag}  ${this.attributes().join(" ")}>
                <a ${href} ${this.events}>${content}</a>
            </${this.tag}>
        `
    }
}

export const menuItem = (href, children, options) => new MenuItem(href, children, options)
