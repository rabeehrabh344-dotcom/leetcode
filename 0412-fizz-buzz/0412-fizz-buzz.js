/**
 * @param {number} n
 * @return {string[]}
 */
 function fizzBuzz(n) {

 let add =[];

    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            add.push("FizzBuzz")
        }
        else if(i % 3 === 0){
            add.push("Fizz")
        }
        else if(i % 5 === 0){
            add.push("Buzz")
        }
        
        else{
            add.push(String(i))
        }
    }

    return add;
    
};
console.log(fizzBuzz(15));