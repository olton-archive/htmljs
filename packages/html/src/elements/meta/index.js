import TagEmpty from "../core/tag-empty"
import {render} from "../../render";

export class Meta extends TagEmpty {
    tag = 'meta'

    selfAttributes() {
        return ["content", "name", "http-equiv", "charset"]
    }
}

export const meta = options => new Meta(options)

export const addMeta = options => {
    let metas = document.head.querySelectorAll("meta")
    let metaElement = meta(options), exists = false, attr
    const check = ["name", "charset", "http-equiv"]

    metas.forEach( v => {
        for (let i = 0; i < check.length; i++) {
            attr = check[i]
            if (options[attr] && (v.hasAttribute(attr) && v.getAttribute(attr) === options[attr])) {
                v.remove()
                return
            }
        }
    })

    render(metaElement, document.head, {clear: false})
}