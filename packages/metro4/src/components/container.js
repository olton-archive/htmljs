import {addClass} from "../helpers/add-class";
import {Div} from "@htmljs/html";

export class Container extends Div {
    constructor(type = '', children = '', options = {}) {
        const className = addClass(type, options.className)
        super(children, {...options, className})
    }
}

export const containerFluid = (children, options) => new Container('container-fluid', children, options)
export const container = (children, options) => new Container('container', children, options)


