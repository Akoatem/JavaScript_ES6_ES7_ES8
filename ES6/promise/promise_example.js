
//using the resolve and reject param, if everything okay we resolve else we reject
let allGood = true; //the revolve function will be executed
//let allGood = false; // then the reject function will be executed throwing the catch error
// define a promise
// a promise is one of thress state
// pending --- it hasnt settled to value yet
// fulfilled --- it settled successfully(calling resolve)
// rejected --- it settled unsuccessfully(calling reject)

let fetchSomeData = new Promise((resolve, reject) =>{
    if (!allGood){
        reject("error fetching data");
    }else{
        resolve({
            id: 1,
            message: 'job done nice work!'
        });
    }

});
// consuming the promise

fetchSomeData.then(fetchedData =>{
    console.log('then:', fetchedData);
}).catch(err =>{ //if for some reason there is rejection, this will execute
    console.error('catch:', err);

})