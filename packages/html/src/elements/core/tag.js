import {parser} from "../../parser"
import BaseElement from "./base";

export default class Tag extends BaseElement {
    constructor(children = '', options = {}) {
        if (typeof children === 'object' && !Array.isArray(children) && !(children.draw)) {
            options = children
            children = ''
        }
        super(options)
        this.children = children
    }

    template(content){
        const tag = this.options.tag ? this.options.tag : this.tag

        return `
            <${tag} ${this.attributes().join(" ")} ${this.events}>${content}</${tag}>
        `
    }

    draw(){
        let children = this.children, html

        if (children == null) {
            children = ''
        }

        if (typeof children === "string") {
            html = children
        } else if (children instanceof BaseElement) {
            html = children.draw()
        } else if (Array.isArray(children)) {
            html = children.map( parser ).join("")
        } else {
            html = ''
        }

        return this.template(html)
    }
}