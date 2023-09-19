// Notes: filter - returns a new array
// can manipulate the size of new array
// retuns based on conditions

const cousins = [
  {
    name: 'Sahara',
    age: 26,
    position: 'Web Developer',
  },
  {
    name: 'Prianka',
    age: 24,
    position: 'Fashion Designer',
  },
  {
    name: 'Efty',
    age: 23,
    position: 'Architech',
  },
  {
    name: 'Esha',
    age: 21,
    position: 'BBA',
  },
  {
    name: 'Diman',
    age: 19,
    position: 'Graphics Designer',
  },
  {
    name: 'Rihan',
    age: 19,
    position: 'BBA',
  },
  {
    name: 'Suhan',
    age: 10,
    position: 'Student',
  },
  {
    name: 'Rithika',
    age: 8,
    position: 'Student',
  },
];
const youngPeople = cousins.filter(function (person) {
  return person.age <= 20;
});
console.log(youngPeople);

const bba = cousins.filter(function (person) {
  return person.position === 'BBA';
});
console.log(bba);
