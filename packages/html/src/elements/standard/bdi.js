import Tag from "../core/tag";

export class Bdi extends Tag {
    tag = 'bdi'
}

export const bdi = (children = '', options = {}) => new Bdi(children, options)