const square = (n) => {
    if (n === 1) {
        return 1;
    }
    return Math.pow(n, 2);
}

module.exports = square;