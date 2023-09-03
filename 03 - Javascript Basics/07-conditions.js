/* ## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects */
const person1 = {
  name: 'Sahara',
  age: '25',
  status: 'resident',
};
const person2 = {
  name: 'Salma',
  age: '9',
  status: 'tourist',
};

if (person1.age >= 18 && person1.status === 'resident') {
  console.log('Hi ' + person1.name);
} else {
  console.log('Hi '+ person2.name);
}
