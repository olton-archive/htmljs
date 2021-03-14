export function setStyles(src = {}){
    return Object.keys( src ).map( key => `${dashedName(key)}: ${src[key]}` ).join("; ")
}

export function setClasses(src = []){
    return Array.isArray(src) ? src.join(" ") : src.toString()
}

export function camelCase(string){
    return string.replace( /-([a-z])/g, function(all, letter){
        return letter.toUpperCase();
    });
}

export function dashedName(str){
    return str.replace(/([A-Z])/g, function(u) { return "-" + u.toLowerCase(); });
}

