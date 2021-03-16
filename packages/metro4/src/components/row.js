import {Div} from "@htmljs/html";
import {addClass} from "../helpers/add-class";

export class Row extends Div {
    constructor(children = '', options = {}) {
        const className = addClass("row", options.className)
        super(children, {...options, className})
    }
}

export const row = (children, options) => new Row('row', children, options)
