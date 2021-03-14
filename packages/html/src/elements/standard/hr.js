import TagEmpty from "../core/tag-empty";

export class Hr extends TagEmpty {
    tag = 'hr'
}

export const hr = options => new Hr(options)