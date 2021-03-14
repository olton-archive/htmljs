import TagEmpty from "../core/tag-empty";

export class Source extends TagEmpty {
    tag = 'source'

    selfAttributes() {
        return ["media", "src", "type"]
    }
}

export const source = (options = {}) => new Source(options)
export const source2 = (src = '', options = {}) => source({...options, src})