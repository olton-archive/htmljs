import {Anchor, Div, List, ListItem, Nav} from "@htmljs/html";
import {addClass} from "../helpers/add-class";
import {addRole} from "../helpers/add-role";

export class AppBar extends Nav {
    constructor(children = '', options = {}) {
        super(children, addRole('app-bar', options))
    }
}

export const appBar = (children, options) => new AppBar(children, options)

export class AppBarContainer extends Div {
    constructor(children = '', options = {}) {
        const className = addClass('app-bar-container', options.className)
        super(children, {...options, className});
    }
}

export const appBarContainer = (children, options) => new AppBarContainer(children, options)

export class AppBarBrand extends Anchor {
    constructor(children = '', options = {}) {
        const className = addClass('brand', options.className)
        super(children, {...options, className});
    }
}

export const appBarBrand = (children, options) => new AppBarBrand(children, options)

export class AppBarItem extends Anchor {
    constructor(children = '', options = {}) {
        const className = addClass('app-bar-item', options.className)
        super(children, {...options, className});
    }
}

export const appBarItem = (children, options) => new AppBarItem(children, options)

export class AppBarMenu extends List {
    constructor(children = '', options = {}) {
        const className = addClass('app-bar-menu', options.className)
        super('ul', children, {...options, className});
    }
}

export const appBarMenu = (children, options) => new AppBarMenu(children, options)

