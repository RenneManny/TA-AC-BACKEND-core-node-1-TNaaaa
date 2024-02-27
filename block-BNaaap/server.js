// writeCode

// 1. create a server on port 4444 and request from browser on `localhost:4444`
// 2. Add statusCode of 201 and headers to send html content to response
// 3. Do request on server using **different HTTP methods** using **Postman** and write code to check request methods for multiple requests.


const http = require('http');
const server=http.createServer(handleRequest);
function handleRequest(req,res){
   
    res.writeHead(201,{"Content-Type":"text/html"})
    console.log("This is working");
    res.write("<h1>Hello World </h1>")
    res.end();
}
server.listen(4444);