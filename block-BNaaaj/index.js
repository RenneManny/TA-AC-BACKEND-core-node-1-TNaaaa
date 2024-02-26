
// Q. Write code to run `index.js` with content console.log('Welcome to Nodejs') in node environment ?
console.log('Welcome to Nodejs');
// Q. In above `index.js` file
// - require os module
// - write code to get `number of cpu's, free memory, uptime and version from os module`
// - write code to require only readFile and unlink method from fs module.
const os = require('os');
const totalCpu=os.cpus().length;
console.log(`Total number of cpus in your CPU are ${totalCpu}`);
// free memeory
const freeMem=os.freemem();
console.log(`Free memory available in your system is :${freeMem}`);
// uptime
const uptime=os.uptime();
console.log(`Your OS uptime is ${uptime}`);
// version
const version=os.version();
console.log(`Your system version is ${version}`);


// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// - create a fixed length buffer of 12.
// - write code to convert buffer back to string.

let buffer1=Buffer.alloc(12);
console.log("This is buffer1"+buffer1);
let buffer2=Buffer.allocUnsafe(12)
console.log("This is buffer2"+buffer2);
buffer1.write("Hello Altcampus. This is NodeJS");
buffer2.write("Hello Altcampus. This is ExpressJS");
console.log(buffer1.toString());
console.log(buffer2.toString());

// Q. Write code example to demonstrate blocking code.

const fs = require('fs');
const { log } = require('console');
console.log("Blocking code example:");
console.log("Reading file synchronously...");

const data = fs.readFileSync('content', 'utf8');
console.log("This is file content 👍 :", data);

console.log("Blocking code execution completed.");

// Write code example to demonstrate  non blocking code 
console.log("This is non blocking code example:");
console.log("Reading file Asynchronously:");

res=fs.readFile('content','utf-8',(err,d)=>{
    console.log("This is file content 👍",d);
    console.log("NON bocking code exevcution completed");
})
