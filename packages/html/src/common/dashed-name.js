export function dashedName(str){
    return str.replace(/([A-Z])/g, function(u) { return "-" + u.toLowerCase(); });
}
