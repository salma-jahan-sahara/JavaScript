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
/* 
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
 */
/* Reference vs Value
Primitive data type 
String, Number, Boolean, Undefined, Null
Arrays, Functions, Object = object
typeof
*/

// When assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value
// When assigning non-primitive data type value to a variable is done by reference so any changes will affect all the reference
/* 
const number = 1;
let number2 = number;
number2 = 7;
console.log(`First value ${number}`);
console.log(`Second value ${number2}`);

let person = {name : 'sahara'}
let person2 = {...person};
person2.name = 'sayed';
console.log(`First person ${person.name}`);
console.log(`First person ${person2.name}`); */

/* 
Null and undefined
both represent "no value"
undefined - "javscript can not find value for this"
variable without value 
missing function arguments
missing object properties
null - "developer set the value"
*/

/* let number = 20+null; 
// 20 + 0
console.log(number);
let number2 = 20 + undefined;
// 20 + 0
console.log(number2);
 */
/* 
Truthy & Falsy
"", '',``, 0, -0, NaN, false, null, undefined
*/
/* const bool1 = true;
const bool2 = 2 > 1;
if (bool1) {
  console.log(`works`);
}
if (bool2) {
  console.log(`works`);
} */

/* const names = `sahara`;
if (names) {
  console.log(`Truthy`);
} else {
  console.log(`Falsy`);
} */

// unary operator - typeof
let text = `sahara sayed`;
console.log(typeof text);
// operand

let number = 5;
let number2 = 2 + 5;
// ternary operator
// condition ? (runs if true) : (runs if false)
// variable lookup
const globalNumber = 5;
function add(num1, num2) {
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  // console.log(multiplyResult); error
  multiply();
  return result;
}
console.log(add(3, 4));

// call back function
