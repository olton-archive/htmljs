import Tag from "../core/tag";

export class Figure extends Tag {
    tag = 'figure'
}

export const figure = (children = '', options = {}) => new Figure(children, options)

export class FigCaption extends Tag {
    tag = 'figcaption'
}

export const figcaption = (children = '', options = {}) => new FigCaption(children, options)
