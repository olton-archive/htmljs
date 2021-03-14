import Tag from "../core/tag";

export class IFrame extends Tag {
    tag = 'iframe'

    selfAttributes() {
        return ["align", "allowtransparency", "frameborder", "height", "hspace", "marginheight", "marginwidth", "name", "sandbox", "scrolling", "seamless", "src", "srcdoc", "vspace", "width"]
    }
}

export const iframe = (children = '', options = {}) => new IFrame(children, options)
export const iframe2 = (src = '', name = '', children = '', options = {}) => new IFrame(children, {...options, src, name})