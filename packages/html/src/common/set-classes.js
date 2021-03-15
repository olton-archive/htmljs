export function setClasses(src = []){
    return Array.isArray(src) ? src.join(" ") : src.toString()
}
