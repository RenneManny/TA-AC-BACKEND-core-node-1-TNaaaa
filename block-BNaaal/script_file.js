// writeCode

// 1. create a basic node server using http module's createServer method and add a listener on port 4000.
// 2. start the server using script writer i.e. `node script_file.js`
// 2. open the browser and request your server on url `http://localhost:4000`.
// 3. notice the output in browser and terminal.
const http = require('http');
const port=4000;
const server=http.createServer(handleRequest);
function handleRequest(req,res) { 
    console.log("Server is listening on port 4000");
    console.log("Open browser and type `localhost:4000` and hit enter in order to see output .")
    res.end('Welcome to basic server 👍')
 }
server.listen(port,'localhost');