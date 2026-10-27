/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend=== -2147483648 && divisor === -1){
        return 2147483647
    }
    let negative=(dividend <0) !== (divisor <0);

    let a=Math.abs(dividend);
    let b=Math.abs(divisor);
    let result=0;

    while(a>=b){
        let value=b;
        let count=1;
        
        while(a>=value+value){
            value +=value;
            count +=count;
        }
        a -=value;
        result+=count;
    }
    return negative ? -result : result;
};