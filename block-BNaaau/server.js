// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object

const http = require('http');
const server=http.createServer(handleRequest);
function handleRequest(req,res){
console.log(req,res);
res.end();
}
server.listen(5000,()=>{
  console.log('Server is listening at port 5000');
})