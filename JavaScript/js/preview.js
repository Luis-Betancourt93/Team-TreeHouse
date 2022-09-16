
// ---------------- Functions -----------

// Creating a Function
// function consoleRandom () {
//   const randomNumber = Math.floor( Math.random() * 6 ) + 1;
//   console.log(randomNumber);
// }

// Calling a function
// consoleRandom();


// Passing multiple arguments 

// function getArea(width, length) {
//  const area = width * length;
//  return area;
// }
 
// console.log(getArea(20, 20));



//  ARROW FUNCTION SYNTAX / They are not hosted
//  const square = (x) => {
//   return x * x;
//  };

//  Change this function to an arrow function
// function getRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * 6 ) + 1;
//   return randomNumber;
// }

// Arrow Function
// const getRandomNumber = () => {
//   const randomNumber = Math.floor(Math.random() * 6 ) + 1;
//   return randomNumber;
// };

//  Change this function to an arrow function
// function getArea(width, length, unit) {
//   const area = width * length;
//   return `${area} ${unit}`
// }

// const getArea = (width, length, unit) => {
//   const area = width * length;
//   return `${area} ${unit}`;
// };

// const getRandomNumbers = (higher, lower) => {
//   let randomNumber = Math.floor(Math.random() * (higher - lower)) + 1;
//   return randomNumber;
// };

// console.log(getRandomNumbers(5,10))

function getRandomNumbers(lower, higher) {
  let randomNumber = Math.floor(Math.random() * (higher - lower + 1 )) + lower;
  return randomNumber;
}

console.log(getRandomNumbers(5, 10));