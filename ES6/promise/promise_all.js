// Promise.all
// useful for agregating the result for multiple promises
// return a single promise that fulfills when all of the promises
// passed to it has been fulfilled, it reject with a reason
// At the first promise that reject or with an error
// caught by the first argument, if that argument has caught an error inside it
// using try/catch/throw blocks

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hello');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'World!');
});

const p3 = 1000;

Promise.all([p1,p2, p3]).then((result) =>{
    console.log(result);
}).catch((err) =>{
    console.error('Promise.all rejection!', err);
})

/**
 * promise.race()
 * Returns a promise that fulfills or rejects as soon as one 
 * of the promise in the iterable fulfills or rejects, with the value or
 * reason for the promise.
 **/ 

Promise.race([p1,p2, p3]).then((result) =>{
    console.log(result);
}).catch((err) =>{
    console.error('Promise.all rejection!', err);
})
