/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x)
    let result = str.split("").reverse().join("")
    return str === result;
};
console.log(isPalindrome(121))