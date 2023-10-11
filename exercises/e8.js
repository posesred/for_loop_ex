
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let greatest = 0;
  for(let i=0; i<array.length; i++){
    if(array[i].balance > greatest){
      greatest = array[i].balance;
    }
  }

  for(let x=0; x<array.length; x++){
    if(array[x].balance == greatest){
      return [array[x]];
    }
  }
}

//found on google this method 
// export function getClientWithGreatestBalance(array) {
//   if (array.length === 0) {
//     return [];
//   }

//   let greatestAccount = array[0];

//   for(let i=1; i<array.length; i++){
//     if(array[i].balance > greatestAccount.balance){
//       greatestAccount = array[i];
//     }
//   }

//   return [greatestAccount];
// }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
