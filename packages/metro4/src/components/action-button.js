import {Button, Div, List, ListItem} from "@htmljs/html"
import {addClass} from "../helpers/add-class"

export class ActionButton extends Button {
    constructor(icon = '', options = {}) {
        const className = addClass("action-button", options.className)
        super(icon, {...options, className})
    }

    template(content) {
        return `
            <${this.tag} ${this.attributes().join(" ")} ${this.events}>
                <span class="icon">${content}</span>            
            </${this.tag}>
        `
    }
}

export const actionButton = (icon = '', options = {}) => new ActionButton(icon, options)

export class MultiActionButton extends Div {
    constructor(children = '', options = {}) {
        const className = addClass("multi-action", options.className)
        super(children, {...options, className})
    }
}

export const multiActionButton = (children = '', options = {}) => new MultiActionButton(children, options)

export class ActionButtonActions extends List {
    constructor(type = '', children = '', options = {}) {
        const className = addClass("actions", options.className)
        super(type, children, {...options, className});
    }
}

export const actionButtonActions = (children = '', options = {}) => new ActionButtonActions('ul', children, options)
