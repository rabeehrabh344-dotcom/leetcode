/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;

    for (let customer of accounts) {
        let sum = 0;

        for (let a of customer) {
            sum += a;
        }

        if (sum > max) {
            max = sum;
        }
    }

    return max;
};