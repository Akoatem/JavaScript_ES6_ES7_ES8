
// this arrow function eliminate lots line codes and makes it simplier
function add(...nums){
    let total = nums.reduce((x, y) => x+y);

    console.log(total);

}
add(2,5,7,8,9,4,56);