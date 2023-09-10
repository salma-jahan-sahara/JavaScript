// String Properties and methods
/* let text = ' Sahara Sayed';
console.log(text);
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(1));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('e'));
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith('sahara'));
console.log(text.includes('hara'));
console.log(text.slice(0,2));
console.log(text.slice(-3)); */

// Template Literals - ES6+
// Backtick characters ``
// Interpolation ${} - insert expression(value)

/* const name = 'Sahara';
const age = 25;
const value = `Hey it's ${name} and she is ${age} years old. And
here is some simple math ${4 + 8}`;
console.log(value);

// Array Properties and Methods
let names = [
  'sahara',
  'prianka',
  'efty',
  'esha',
  'diman',
  'rihan',
  'suhan',
  'rithika',
];
// lenght
console.log(names.length);
console.log(names[names.length-1]);

// concat
let lastNames = [
  'sayed',
  'sayed',
  'hoque',
  'jahan',
  'rahman',
  'hossain',
  'hoque',
  'rahman',
];
const allNames =names.concat(lastNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());
// unshift
allNames.unshift('susy');
console.log(allNames);
// shift
allNames.shift();
console.log(allNames);
// push
allNames.push('susy');
console.log(allNames);
// pop
allNames.pop();
console.log(allNames);
// splice - mutates original array
const specificName = allNames.splice(2,1);
console.log(specificName);
console.log(allNames);
 */

// Array and for loop
const names = ['sahara', 'prianka', 'sima'];
const lastName = 'Sayed'
let newArray = [];

// for loop
for(let i = 0; i< names.length;  i++)
{
  console.log(i);
  console.log(names[i]);
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}
console.log(newArray);
