
// ---------------- Functions -----------

// Creating a Function
function consoleRandom () {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;
  console.log(randomNumber);
}

// Calling a function
consoleRandom();


// Passing multiple arguments 

function getArea(width, length) {
 const area = width * length;
 return area;
}
 
console.log(getArea(20, 20));