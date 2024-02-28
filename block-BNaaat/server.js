// writeCode

// Create a http server and use readFile and createReadStream to read a file and send the data into response. 
// - add a listener on port 5555
// - create a file node.html
// - handle GET request on '/file' route to read node.html using fs.readFile
// - handle GET request on '/stream' route to read node.html using fs.createReadStream
const http = require('http');
const  fs = require('fs');
const server=http.createServer(handleRequest);
function handleRequest(req,res) {

    if(req.method==='GET' && req.url==='/file'){

        
        res.writeHead(200,{'content-type':'text/html'})
        fs.readFile('./node.html',(err,data)=>{
            res.write(data);
            res.end();
        })
        
    }
    else if(req.method==='GET' && req.url==='/stream'){
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream('./node.html').pipe(res);
    }

   else{
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Error Occured </h1>');
    res.end();
   }
}
server.listen(5555,()=>{
    console.log('Server is listening on port 5555');
})