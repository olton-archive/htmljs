import Tag from "../core/tag"

export class FigureSimple extends Tag {
    tag = 'figure'

    constructor(img = '', caption = '', alt= '', options = {}) {
        if (alt && typeof alt !== "string") {
            options = alt
            alt = ""
        }

        super(options)

        this.img = img
        this.alt = alt
        this.caption = caption
    }

    template() {
        return `
            <${this.tag} ${this.attributes().join(" ")} ${this.events}>
                <img src="${this.img}" alt="${this.alt}">
                <figcaption>${this.caption}</figcaption>            
            </${this.tag}>
        `
    }
}

export const figureSimple = (img, caption, alt, options) => new FigureSimple(img, caption, alt, options)