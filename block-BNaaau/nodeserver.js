
// Q. create a node server 
  // - add listener on port 5100
  // - respond with 'My first server in NodeJS' using response object

//   Q. write code to create a node server 
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

  const http = require('http');
  const server=http.createServer(handleRequest);
//   const port=5100
  const port=5555;

  function handleRequest(req,res ) {
    // console.log(req.headers);
    let userAgent=req.headers['user-agent'];

    
    // res.end('My first server using NodeJS ');
    res.end(`${userAgent}`);
    }
  server.listen(port,()=>{
    console.log('server is listening at ${port}');

  })