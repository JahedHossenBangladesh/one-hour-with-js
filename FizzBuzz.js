const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input) {
 let typeOfInput = (typeof input) === "string" ? "Not a Number" :(typeof input) === "boolean"?"Not a Number": input;
 
 let checkOutput = typeOfInput % 15 === 0 ? "FizzBuzz"
      : typeOfInput % 3 === 0
      ? "Fizz"
      : typeOfInput % 5 === 0
      ? "Buzz"
      : typeOfInput;

return checkOutput;    }







// function fizzBuzz(input) {
//     if(input % 15 === 0) {
//         return "FizzBuzz"
//     }else if( input % 3 === 0) {
//         return "Fizz"
//     } else if(input %5 === 0) {
//         return "Buzz"
//     }else {
//      let checkType = typeof input === "string" ? "Not a Number":(typeof input === "boolean"? "Boolean": input);
//      return checkType
//     }
  
// }