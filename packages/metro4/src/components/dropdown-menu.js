import {List} from "@htmljs/html";
import {addClass} from "../helpers/add-class";
import {addRole} from "../helpers/add-role";

export class DropdownMenu extends List {
    constructor(children = '', options = {}) {
        const className = addClass('d-menu', options.className)
        const _options = addRole('dropdown', options)
        super('ul', children, {..._options, className});
    }
}

export const dropdownMenu = (children, options) => new DropdownMenu(children, options)