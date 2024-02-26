// In app.js, require functions from area.js and execute the areas of given figures and console.log the results.
const {circl,
    rect,
    square,
    } = require('./area');
    console.log("Area of circle is "+circl(2));
    console.log(`Area of rectangle is `+rect(2,2));
    console.log(`Area of squaree is `+square(2));