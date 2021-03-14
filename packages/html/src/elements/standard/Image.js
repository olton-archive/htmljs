import TagEmpty from "../core/tag-empty";

export class Img extends TagEmpty {
    tag = 'img'

    selfAttributes() {
        return ["align", "alt", "border", "height", "hspace", "ismap", "longdesc", "lowsrc", "src", "vspace", "width", "usemap"]
    }
}

export const img = (options = {}) => new Img(options)
export const img2 = (src = '', alt = '', options = {}) => img({...options, src, alt})