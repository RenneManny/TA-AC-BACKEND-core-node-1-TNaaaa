//  In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

function calculateRectangleArea(length, width) {
    return length * width;
}


function calculateSquareArea(side) {
    return side * side;
}

module.exports={
   "circl": calculateCircleArea,
    "rect":calculateRectangleArea,
    "square":calculateSquareArea,
}
// console.log()