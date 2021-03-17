export const jsLoader = async (path, options) => {
    let response = await fetch(path, options), textNode, result = () => {}

    if (!response.ok) {
        throw new Error("HTTP error: " + response.status)
    }

    textNode = await response.text()

    eval(`result = ${textNode}`)

    return typeof result === "function" ? result() : result
}