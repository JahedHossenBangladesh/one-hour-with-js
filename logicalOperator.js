// Logical &&

console.log(true && false);

let highIncome = true;
let goodCredit = true;
let eligibleForLoan = highIncome && goodCredit;

// Logical || or operator
console.log(eligibleForLoan);
 highIncome = false;
 goodCredit = false;
eligibleForLoan = highIncome || goodCredit;

console.log('eligible',eligibleForLoan);

// Not (!)
// eligibleForLoan = highIncome !== goodCredit;
// console.log(eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('application refused',applicationRefused);