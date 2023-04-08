
/**
 * @param {number[]} inputOne
 * @param {number[]} inputTwo
 * @return {number}
 */
var minNumber = function (inputOne, inputTwo) {
    let inputOneBitmask = 0;
    for (let n of inputOne) {
        inputOneBitmask ^= (1 << n);
    }
    let inputTwoBitmask = 0;
    for (let n of inputTwo) {
        inputTwoBitmask ^= (1 << n);
    }

    let bitwiseAnd = inputOneBitmask & inputTwoBitmask;
    if (bitwiseAnd !== 0) {
        return findMinimumDigit(bitwiseAnd);
    }

    let digitOne = findMinimumDigit(inputOneBitmask);
    let digitTwo = findMinimumDigit(inputTwoBitmask);
    return 10 * Math.min(digitOne, digitTwo) + Math.max(digitOne, digitTwo);
};

/**
 * @param {number} bitmask
 * @return {number}
 */
function findMinimumDigit(bitmask) {
    let minDigit = 0;
    while ((bitmask & 1) === 0) {
        bitmask = (bitmask >> 1);
        ++minDigit;
    }
    return minDigit;
}
