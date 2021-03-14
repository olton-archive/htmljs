import Tag from "../core/tag";

export class VideoTag extends Tag {
    tag = 'video'

    selfAttributes() {
        return ["autoplay", "controls", "height", "loop", "loop", "poster", "preload", "src", "width"]
    }
}

export const video = (children = '', options = {}) => new VideoTag(children, options)
export const video2 = (src = '', children = '', options = {}) => video(children, {...options, src})