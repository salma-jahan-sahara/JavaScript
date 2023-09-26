/* notes
reduce
iterates, callback function
reduce to a single value - number, array, object
1 parameter ('acc') - total of all calculations
2 parameter ('curr') - current iteration/value

*/

const speedrs = [
  {
    id: 1,
    name: 'Sahara',
    age: 26,
    position: 'Web Developer',
    salary: 500,
  },
  {
    id: 2,
    name: 'Prianka',
    age: 24,
    position: 'Fashion Designer',
    salary: 20000,
  },
  {
    id: 3,
    name: 'Efty',
    age: 23,
    position: 'Architech',
    salary: 300,
  },
  {
    id: 4,
    name: 'Esha',
    age: 21,
    position: 'BBA',
    salary: 200,
  },
  {
    id: 5,
    name: 'Diman',
    age: 19,
    position: 'Graphics Designer',
    salary: 10000,
  },
  {
    id: 6,
    name: 'Rihan',
    age: 19,
    position: 'BBA',
    salary: 5000,
  },
  {
    id: 7,
    name: 'Suhan',
    age: 10,
    position: 'Student',
    salary: 100,
  },
  {
    id: 8,
    name: 'Rithika',
    age: 8,
    position: 'Student',
    salary: 1000,
  },
];
// console.log(speedrs);
const total = speedrs.reduce(function (acc, currItem) {
  //  returns number of objects
  console.log(`total ${acc}`);
  console.log(`current money: ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
  // must return acc
},0);
