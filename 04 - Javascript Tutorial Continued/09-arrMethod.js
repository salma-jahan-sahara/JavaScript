/* 
## Array Methods #9

Multiple Videos

#### Create Students Array

1. setup students array with 5 students
   {
   id: 1,
   name: 'peter',
   score: 80,
   favoriteSubject: 'math',
   },

#### Use Multiple Files

- easer to manage code base (file, project)
- order matters
- other ways to achieve the same result (ES6 modules, fetch DB )
- not limited to just static data

#### updatedStudents

1. add role:'student' property to each object
   using MAP method
2. assign to 'updatedStudents' variable and log

#### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log

#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log

#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log

#### survey

1. list favorite subjects with reduce
   {
   english: 1
   history: 1
   math: 3
   }
2. assign to survey and log
 */

const updatedStudents = students.map(function (student) {
  // console.log(students);
   student.role = 'student';
   return student;
});
console.log(updatedStudents);

const highScores = students.filter(function (student) {
  // if(student.score >= 80){
  //    return student;
  // }
  // if(student.score >= 80) return student;
   return student.score >= 80;
});
console.log(highScores);

const specificId = students.find(function (student) {
   return student.id === 2;
});
console.log(specificId);

const averageScore =
   students.reduce(function (scoresTotal, student) {
      return scoresTotal + student.score;
   }, 0) / students.length;
console.log(averageScore);

/* #### survey

   1. list favorite subjects with reduce
      {
      english: 1
      history: 1
      math: 3
      }
   2. assign to survey and log
 */

   const survey = students.reduce(function(survey,student){
      // console.log(student.favoriteSubject);
      const favSubject = student.favoriteSubject;
      if(survey[favSubject]){
         survey[favSubject] = survey[favSubject]+1;
      }
      else{
         survey[favSubject] = 1;
      }
      return survey;
   },{})
      console.log(survey);