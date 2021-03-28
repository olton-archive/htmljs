import {dashedName} from "./dashed-name";
import {numProps} from "../helpers/num-props"

export function setStyles(src = {}){
    return Object.keys( src ).map( key => {
        const propName = dashedName(key)
        let propVal = src[key]

        if (!numProps.includes(propName) && !isNaN(propVal)) {
            propVal += 'px'
        }

        return `${propName}: ${propVal}`
    } ).join(";")
}
