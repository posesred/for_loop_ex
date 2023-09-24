// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max) {
  // Your code goes here...
  let arrOfSquares = []
  let m =0;
  for(let i = 0; m<=max;i++ ){
    if(i*i<max){
      arrOfSquares.push(i*i)
    }
    else{
      m = i*i;
    }
  }
  return arrOfSquares;
}
// I tried to improvise it and chatgpt gave me this 
// export function getNumbersWithSquareRoots(max) {
//   // Your code goes here...
//   let arrOfSquares = [];
//   for(let i = 0; i * i <= max; i++) {
//     arrOfSquares.push(i * i);
//   }
//   return arrOfSquares;
// }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
