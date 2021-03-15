import {dashedName} from "./dashed-name";

export function setStyles(src = {}){
    return Object.keys( src ).map( key => `${dashedName(key)}: ${src[key]}` ).join("; ")
}
