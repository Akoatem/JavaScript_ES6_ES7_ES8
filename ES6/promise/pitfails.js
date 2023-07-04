import fetch from "node-fetch";

const url = "https://jsonplaceholder.typicode.com/posts/1";


function isStatus200(res){
    console.log('checking HTTP response status...');
    if(res.status === 200){
        return res
    }else{
        let err = new Error(res.statusText);
        err.response = res;
        throw err;
    }
}

function getPostJson(res){
    console.log('Getting Title...');
    return res.json()
}

function getTitle(post){
    console.log('Getting Title...');
    return post.title;

}

function echoTitle(title){
    console.log(title);
}

// pitfails using promise chaining
// bad news - not return, nesting and not catching

fetch(url).then(isStatus200)
      .then(result =>{
        console.log('Getting result...');
        getPostJson( result)
           .then(post => getTitle(post));
      }).then(title => echoTitle(title))

// Good news - terminating chain with catch, flatten

fetch(url)
    .then(isStatus200)
    .then(result => {
        console.log('Get a result...');
        return getPostJson(result);
})
.then(getTitle)
.then(echoTitle)
.catch(err => console.error(err));