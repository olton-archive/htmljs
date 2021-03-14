import TagEmpty from "../core/tag-empty";

export class Wbr extends TagEmpty {
    tag = 'wbr'
}

export const wbr = options => new Wbr(options)