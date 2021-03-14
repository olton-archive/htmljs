import Tag from "../core/tag";

export class Article extends Tag {
    tag = 'article'
}

export const article = (children = '', options = {}) => new Article(children, options)