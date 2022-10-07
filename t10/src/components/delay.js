const delay = (fCallback, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fCallback())
        }, ms)
    })
}
module.exports = delay;