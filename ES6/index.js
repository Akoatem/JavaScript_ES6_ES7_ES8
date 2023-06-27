let name1 = 'Ako';
let name2 = 'Atem';
let num1 = 30;
let num2 = 10;

const fullName = name1 + ' ' +name2;
const fullName2 = `${name1} ${name2}`;
const fullName3 = `${num1 + num2} ${name2}`;

let fullnames = `${name1} ${name2}`;

console.log(fullName);
console.log(fullName2);
console.log(fullName3);
console.log(demo1);

document.getElementById('demo').innerHTML = fullnames;

const x = (x, y) => x * y;
document.getElementById("demo").innerHTML = x(5, 5);



