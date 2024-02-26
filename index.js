const path = require('path');
const {URL} = require('url');
let urlString="https://blog.altcampus.io:80/students/register?name=altcampus&gender=male";
let parsedUrl=new URL(urlString);
console.log(parsedUrl);
// - console parsedUrl.pathname
console.log(parsedUrl.pathname);
// - console parsedUrl.query
console.log(parsedUrl.search);
// - console.log parsed Url host and protocol
console.log(parsedUrl.host);