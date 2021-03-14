import Tag from "../core/tag";

export class AudioTag extends Tag {
    tag = 'audio'

    selfAttributes() {
        return ["autoplay", "controls", "loop", "preload", "src"]
    }
}

export const audio = (children = '', options = {}) => new AudioTag(children, options)
export const audio2 = (src = '', children = '', options = {}) => new AudioTag(children, {...options, src})