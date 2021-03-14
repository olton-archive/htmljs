import TagEmpty from "../core/tag-empty";

export class Br extends TagEmpty {
    tag = 'br'

    selfAttributes() {
        return ["clear"]
    }
}

export const br = options => new Br(options)