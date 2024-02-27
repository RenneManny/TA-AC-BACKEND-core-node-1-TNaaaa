// writeCode

// 1. create a basic server and listen on port 3000
// 2. write code to console
//   - request headers
//   - request method and url
// 3. request from browser on `http://localhost:3000/about`

const http = require('http');
const server=http.createServer((req,res)=>{
console.log(req.headers);
console.log(req.method);
console.log(req.url);

res.end("Yeah am listening");
}).listen(3000);

