// let is a structural version of var and uses blocks code

//if (false){
    // var num = 5;
    //let num = 5; // shows underfined 
//}
//console.log(num) // it show underfined be with var it cant access the block code

//const num2 = []; // you can modify object in an array but you cant overide the datatype
const num2 = {};
//num2 = 25; // it gives error because you can reset the value
//num2.push(34); // it works
num2.firstName =  'Ako'

console.log(num2);