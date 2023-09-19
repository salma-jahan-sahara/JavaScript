/*  Notes
find - retuns single instance (object), first match, if no match(returns-undefined) 
great for getting unique value
*/
const speedrsr = [
  {
    id: 1,
    name: 'Sahara',
    age: 26,
    position: 'Web Developer',
  },
  {
    id: 2,
    name: 'Prianka',
    age: 24,
    position: 'Fashion Designer',
  },
  {
    id: 3,
    name: 'Efty',
    age: 23,
    position: 'Architech',
  },
  {
    id: 4,
    name: 'Esha',
    age: 21,
    position: 'BBA',
  },
  {
    id: 5,
    name: 'Diman',
    age: 19,
    position: 'Graphics Designer',
  },
  {
    id: 6,
    name: 'Rihan',
    age: 19,
    position: 'BBA',
  },
  {
    id: 7,
    name: 'Suhan',
    age: 10,
    position: 'Student',
  },
  {
    id: 8,
    name: 'Rithika',
    age: 8,
    position: 'Student',
  },
];
// console.log(speedrsr);
const person = speedrsr.find(function (person) {
  return person.id === 8;
});
console.log(person);
const couNames = speedrsr.find(function (name) {
  return name.name == 'Sahara';
});
console.log(couNames);