import Tag from "../core/tag";

export class Main extends Tag {
    tag = 'main'
}

export const main = (children = '', options = {}) => new Main(children, options)