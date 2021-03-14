import TagEmpty from "../core/tag-empty";

export class Track extends TagEmpty {
    tag = 'track'

    selfAttributes() {
        return ["kind", "src", "srclang", "label"]
    }
}

export const track = (options = {}) => new Track(options)
export const track2 = (src = '', options = {}) => track({...options, src})