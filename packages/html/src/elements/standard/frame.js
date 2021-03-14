import Tag from "../core/tag";
import TagEmpty from "../core/tag-empty";

export class Frameset extends Tag {
    tag = 'frameset'

    selfAttributes() {
        return ["border", "bordercolor", "cols", "frameborder", "framespacing", "rows"]
    }
}

export const frameset = (children = '', options = {}) => new Frameset(children, options)

export class Frame extends TagEmpty {
    tag = 'frame'

    selfAttributes() {
        return ["bordercolor", "frameborder", "noresize", "name", "src", "scrolling"]
    }
}

export const frame = (options = {}) => new Frame(options)
export const frame2 = (src = '', name = '', options = {}) => new Frame({...options, src, name})

export class NoFrames extends Tag {
    tag = 'noframes'
}

export const noframes = (children = '', options = {}) => new NoFrames(children, options)

