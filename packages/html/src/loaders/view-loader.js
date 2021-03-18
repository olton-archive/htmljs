export const viewLoader = async (path, options = {}, storage = false) => {
    let response, textNode, result = () => {}, storageKey

    if (storage !== false) {
        storageKey = `htmljs::key::${path}`
        textNode = localStorage.getItem(storageKey)
    }

    if (!textNode) {

        response = await fetch(path, options)

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status)
        }

        textNode = await response.text()

        if (storage !== false) {
            localStorage.setItem(storageKey, textNode)
        }
    }

    eval(`result = ${textNode}`)

    return typeof result === "function" ? result() : result
}