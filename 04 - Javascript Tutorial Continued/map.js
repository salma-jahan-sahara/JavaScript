const people = [
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
];

const ages = people.map(function (person) {
  return person.age;
});
console.log(ages);
// maping with objects

const newPeople = people.map(function(person){
    return{
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 20,
    }
})
const names = people.map(function(person){
    return `<h1>${person.name}</h1>`;
})
document.body.innerHTML = names.join('')

console.log(newPeople);
console.log(names);