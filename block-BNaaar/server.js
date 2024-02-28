// writeCode

// Create a basic http server which is listening on port 5k 

// 1. handle GET request on '/' and send 'Welcome to homepage' in response in plain text.
// 2. handle GET request on '/about' and send response 'this is all about NodeJS' using h2 tag in HTML.


const http = require('http');
const server=http.createServer(handleRequest);
function handleRequest(req,res){
    
    if(req.method==="GET" && req.url==="/"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.write("Welcome to homepage")
        res.end();
    }
    else if(req.method==='POST' && req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h2>This is all about NodeJS</h2>');
        res.end();
    }
    // 3. handle POST request on '/about' and send json response `{message: this is a post request}`.
    else if (req.method==='POST' && req.url==='/about'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({message: "This is a post request"}));
            res.end();
        });

    }

}
server.listen(5000,()=>{
    console.log("Server is listening at port 5000");
})