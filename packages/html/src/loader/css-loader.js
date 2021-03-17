export const cssLoader = async (path, options) => {
    let response = await fetch(path, options), textNode, style

    if (!response.ok) {
        throw new Error("HTTP error: " + response.status)
    }

    textNode = await response.text()
    style = document.createElement("style")
    style.appendChild(document.createTextNode(textNode))
    document.body.appendChild(style)
}