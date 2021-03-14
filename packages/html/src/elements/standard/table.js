import Tag from "../core/tag";
import TagEmpty from "../core/tag-empty";

export class Table extends Tag {
    tag = 'table'

    selfAttributes() {
        return [
            "align", "background", "bgcolor", "border", "bordercolor", "cellpadding",
            "cellspacing", "cols", "frame", "height", "rules", "summary", "width"
        ]
    }
}

export const table = (children = '', options = {}) => new Table(children, options)

export class Caption extends Tag {
    tag = 'caption'

    selfAttributes() {
        return ["align", "valign"]
    }
}

export const caption = (children = '', options = {}) => new Caption(children, options)

export class Col extends TagEmpty {
    tag = 'col'

    selfAttributes() {
        return ["align", "valign", "char", "charoff", "span", "width"]
    }
}

export const col = options => new Col(options)

export class Colgroup extends TagEmpty {
    tag = 'colgroup'

    selfAttributes() {
        return ["align", "valign", "char", "charoff", "span", "width"]
    }
}

export const colgroup = options => new Colgroup(options)

export class TableSection extends Tag {
    constructor(tag = 'tbody', children = '', options = {}) {
        super(children, options)
        this.tag = tag
    }

    selfAttributes() {
        return ["align", "valign", "char", "charoff", "bgcolor"]
    }
}

export const tbody = (children = '', options = {}) => new TableSection('tbody', children, options)
export const thead = (children = '', options = {}) => new TableSection('thead', children, options)
export const tfoot = (children = '', options = {}) => new TableSection('tfoot', children, options)

export class TableRow extends Tag {
    tag = "tr"

    selfAttributes() {
        return ["align", "bgcolor", "bordercolor", "char", "charoff", "valign"]
    }
}

export const tr = (children = '', options = {}) => new TableRow(children, options)

export class TableCell extends Tag {
    constructor(tag = 'td', children = '', options = {}) {
        super(children, options)
        this.tag = tag
    }

    selfAttributes() {
        return ["abbr", "align", "axis", "background", "bgcolor", "bordercolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"]
    }
}

export const th = (children = '', options = {}) => new TableCell('th', children, options)
export const td = (children = '', options = {}) => new TableCell('td', children, options)


