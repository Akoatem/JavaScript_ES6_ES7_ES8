
let incomes = [1000, 5000, 9000];
let total = 0;

for (let income of incomes){
    income += 4000;
    console.log(income);

    total += income;
}
console.log(total);