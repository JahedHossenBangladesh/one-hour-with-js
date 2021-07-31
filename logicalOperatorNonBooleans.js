//falsy value
// undefined
//null
//0
// false
// ''
// NaN

// Anything that is not Falsy -> truthy

console.log( false || 1 || 2);
console.log(false ||2 || 1);

let useColor = 'red';
let defualtColor = 'blue';
let currentColor = useColor || defualtColor;
console.log(currentColor);

useColor = undefined;
currentColor = useColor || defualtColor;
console.log(currentColor);
