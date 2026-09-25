/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;

    for (let customer of accounts) {
        let sum = 0;

        for (let money of customer) {
            sum += money;
        }

        if (sum > max) {
            max = sum;
        }
    }

    return max;
};