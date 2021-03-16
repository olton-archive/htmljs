export function addClass(cls = [], source){
    if (typeof cls === "string") {
        cls = cls.split(" ")
    }

    if (!source) {
        return cls.join(" ")
    }

    return [...new Set([...cls, ...source.split(" ")])].join(" ")
}