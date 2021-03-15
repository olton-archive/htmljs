import {dashedName} from "../../common/dashed-name";
import {setClasses} from "../../common/set-classes";
import {setStyles} from "../../common/set-styles";
import {universalAttributes} from "../../helpers/universal-attributes"

export default class BaseElement {
    constructor(options = {}) {
        this.options = options
        this.tag = "div"
    }

    selfAttributes(){
        return []
    }

    attributes(){
        let attr = [],
            single = ['hidden', 'disabled', 'required', 'readonly', 'selected', 'open', 'multiply', 'default'],
            service = ["className", "style", "data", "tag", "events"]

        for(let key in this.options) {
            if (service.includes(key))
                continue

            if ( single.includes(key) && this.options[key] === true ) {
                attr.push(key)
                continue
            }

            if ( (this.selfAttributes().includes(key) && !attr.includes(key)) || universalAttributes.includes(key) ) {
                attr.push(`${key}="${this.options[key]}"`)
            }
        }

        if (this.classes) attr.push(`class="${this.classes}"`)
        if (this.styles) attr.push(`style="${this.styles}"`)
        if (this.dataSet) attr.push(this.dataSet)

        return attr
    }

    draw(){
        return this.template()
    }

    get dataSet(){
        const {data = {}} = this.options
        let _ = []

        if (data === {}) return ""

        for(let key in data) {
            _.push(`data-${dashedName(key)}="${data[key]}"`)
        }

        return _.join(" ")
    }

    get events(){
        const {events = {}} = this.options
        let eventsArray = []

        if (events === {}) return ""

        for(let key in events) {
            eventsArray.push(`${key.toLowerCase()}="${events[key]}"`)
        }

        return eventsArray.join(" ")
    }

    get classes(){
        const {className = []} = this.options
        return setClasses(className)
    }

    get styles(){
        const {style = {}} = this.options
        return setStyles(style)
    }

    template(){
        return ``
    }
}