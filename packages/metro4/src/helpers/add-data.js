export const addData = (option, value = '', options = {}) => {
    const _ = {
        ...options
    }

    if (!_.data) {
        _.data = {}
    }

    _.data[option] = value

    return _
}