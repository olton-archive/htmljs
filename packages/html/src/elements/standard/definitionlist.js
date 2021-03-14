import Tag from "../core/tag";

export class Dl extends Tag {
    tag = 'dl'
}

export class Dt extends Tag {
    tag = 'dt'
}

export class Dd extends Tag {
    tag = 'dd'
}

export const dl = (children = '', options = {}) => new Dl(children, options)
export const dt = (children = '', options = {}) => new Dt(children, options)
export const dd = (children = '', options = {}) => new Dd(children, options)