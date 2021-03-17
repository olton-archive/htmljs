export const cssLoader = async (path, options) => {
    let response = await fetch(path, options), textNode, tag

    if (!response.ok) {
        throw new Error("HTTP error: " + response.status)
    }

    textNode = await response.text()
    tag = document.createElement("style")
    tag.appendChild(document.createTextNode(textNode))
    document.body.appendChild(tag)
}