
const apiUrl = 'https://jsonplaceholder.typicode.com';

// this is for fetch request which return a promise
function getTop100Compare(){
    fetch(apiUrl) // this return a promise of a type response
    .then((response)=>response.json()) // the response in json format
    .then((json) =>{ // and we can do something with the data
        console.log(json[0]);

    }).catch((error) =>{
        console.log('fails');
    })
    
}
getTop100Compare();

// This is for Await server calls

async function getTop100Compare(){
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json[0]);

}
getTop100Compare()

function resolveAfter3Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        },3000)
    });
}
// this for promise
/*resolveAfter3Seconds().then((data) => {
    console.log(data);
})*/

// method when dealing with databases

async function getAsyncData(){
    const result = await resolveAfter3Seconds();
    console.log(result);
}
getAsyncData();
