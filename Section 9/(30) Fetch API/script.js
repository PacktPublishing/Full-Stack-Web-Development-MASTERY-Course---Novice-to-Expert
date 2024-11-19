// Basic syntax of Fetch API

// fetch('URL').then(response => {
//     // handle response data
// }).catch(err => {
//     // handle error
// })

// fetch('url').then(res => {
//     res.json();
// }).then(json => {
//     console.log(json);
// })

// Syntax of GET request in JSON format
// function getdata(){
// fetch('https://api.github.com/orgs/nodejs').then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })
// }

// getdata();

// GET data in XML format
// function getdata(){
//     url = "getdata.txt";
// fetch(url).then(response => {
//     return response.text();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })
// }

// getdata();

// Syntax for POST request
let data = {
    first_name: "John",
    last_name: "Anderton",
    job_title: "Software engineer"
}

const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'content-type': 'application/json'
    }
}

fetch('url', options).then(res => {
    res.json();
}).then(res => {
    console.log(res);
})