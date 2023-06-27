// let create many function and return a promise
// let us look for a promise chaining
// simulate fecthing some data

let fetchData = function(data){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('Data successfully retrieved');
            resolve({value: 1, message: 'I love you so much babe'});
        },1000);
    });
}

// Usage of the Promise
fetchData()
  .then(data => {
    console.log(data.message);
    console.log('Value:', data.value);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

  // let parse the data

  let parseData = function(data){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let parseOutPut = `Parse the data for value: ${data.value}, with message: ${data.message}`;
            resolve({parsed: parseOutPut});
        },3000);
    });

  }

  // let echo data
  let echoData = function(data){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log(data.parsed);
        },7000);
    });
  }

  // chaining the promises

  fetchData().then(parseData).then(echoData).catch(error =>{
    console.error(error);
  });

