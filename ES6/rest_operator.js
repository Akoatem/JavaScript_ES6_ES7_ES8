
// it gives us the ability to get the argument out of our function
// it use in a case where we dont know how many input we gonna be used
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
function add(...nums){

    console.log(arguments) // prints out the out and the index position
    console.log(nums)  // prints out the out in array

}
add(1,3,5,6,8,9);

console.log('****************************************');

// example 2

function sum(...argument){
    let sum = 0;

    for(let arg of argument) sum += arg;
    return sum;
}
let x = sum(2,5,6,7,80,54,67,23,10);

console.log(x);