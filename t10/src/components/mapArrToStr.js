const mapArrToStr = (arr) => {
    return arr
        .filter((el) => { return (Number.isInteger(el)) })
        .map(String)
}

module.exports = mapArrToStr;