// writeCode

// Create a http server and use readFile and createReadStream to read a file and send the data into response. 
// - add a listener on port 5555
// - create a file node.html


const http = require('http');
const fs = require('fs');
const server=http.createServer(handleRequest);
function handleRequest(req,res) {
    
    // res.write('<h1>');
    // - handle GET request on '/file' route to read node.html using fs.readFile
    if(req.method==='GET' && req.url==='/file'){
        res.writeHeader(200,{'content-type':'text/html'});
        fs.createReadStream('./node.html').pipe(res);
        res.send();
    }
    // - handle GET request on '/stream' route to read node.html using fs.createReadStream
    
    
}
server.listen(5555,()=>{
    console.log('Server is listening on port 3000');
})