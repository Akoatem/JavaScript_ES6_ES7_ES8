let num1 = [1,2,3,4,5,6];
let num2 = [...num1];
num2.push(true);  // this unrapped num1

console.log(num2);