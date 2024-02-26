// Q. In server.js
// 1. require parse method from url core node module.
// 2. parse `https://airindia.com/fares/calculate?from=delhi&to=detroit`and store parsed value in varaible named parsedUrl.




const {parse} = require('url');
let url=`https://airindia.com/fares/calculate?from=delhi&to=detroit`;
let parsedUrl=new URL(url);
console.log(parsedUrl);
// 3. console query string from parsed url
console.log(`The query  is   `+parsedUrl.search);
// 4. console pathname
console.log(`The path  is    `+parsedUrl.pathname);
// 5. console protocol
console.log(`Protocol used by this link is `+parsedUrl.protocol);
// 6. use parse method from url module to parse query string as well.
console.log(parsedUrl.searchParams);