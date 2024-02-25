

// // ```js
const fs = require('fs');
fs.readFile("index.md",(err,data)=>{
    console.log(data.toString());
    
})
// // Run sync code from fs module in the above file(`index.js`).ole.log(err);
let res=fs.readFileSync("index.md");
console.log("Synchronous version is :" +res.toString)

// // running via asynchronous 
fs.writeFile("Akhil.txt","Akhil is a good boy",(err,data)=>{
    console.log(data);
});
// // 4. create new buffer of fixed length 10 and store it in variable named buff1 and console the buff1.

let buff1=Buffer.alloc(10);
console.log(buff1);
buff1.write("Welcome to Buffer");
console.log(buff1);
console.log(buff1.toString());