import Tag from "../core/tag";

export class Time extends Tag {
    tag = 'time'

    selfAttributes() {
        return ["datetime", "pubdate"]
    }
}

export const time = (children = '', options = {}) => new Time(children, options)