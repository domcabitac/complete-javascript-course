// // Function constructor

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//   console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1968, 'designer');
// var mark = new Person('Mark', 1951, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// // Object.create
// var personProto = {
//   calculateAge: function() {
//     console.log(2020 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1996;
// john.job = 'Teacher'

// var jane = Object.create(personProto, {
//   name: {value: 'Jane'},
//   yearOfBirth: {value: 1990},
//   job: {value: 'Designer'}
// });

// // Primitives vs objects 

// // Primatives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// // Objects
// var obj1 = {
//   name: 'John',
//   age: 26
// }

// var obj2 = obj1;
// obj2.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// // Function
// var age = 27;
// var obj = {
//   name: 'Dom',
//   city: 'Oshawa'
// }

// function change(a, b) {
//   a = 30;
//   b.city = 'Toronto';
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

// // First Class Functions: Passing Functions as Arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for(var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2020 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate (el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(rates);

// // First Class Functions: Functions Returning Functions

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(name + ', what subject do you teach?');
//     }
//   } else {
//     return function(name) {
//       console.log('Hello ' + name + ', what do you do?');
//     }
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQ = interviewQuestion('designer');
// teacherQuestion('dom');
// designerQ('jeff');

// // IIFE

// function game () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();
// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

// // Closures

// function retirement(retAge) {
//   return function(yearOfBirth) {
//     var a = ' years left till retirement'
//     var age = 2020 - yearOfBirth;
//     console.log((retAge - age) + a);
//   }
// }
// var retUS = retirement(66);
// var retGermany = retirement(65);
// var retIceland = retirement(67);

// retUS(1996);
// retGermany(1996);
// retIceland(1996);

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === 'designer') {
//       console.log(name + ', can you please explain what UX design is?');
//     } else if (job === 'teacher') {
//       console.log(name + ', what subject do you teach?');
//     } else {
//       console.log('Hello ' + name + ', what do you do?');
//     }
//   }
// }
// interviewQuestion('designer')('Dom');

// // Bind, call and apply methods

// var john = {
//   name: 'John',
//   age: 23,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//     } else if (style === 'friendly') {
//       console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//     }
//   }
// };

// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };

// john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon');

// // john.presentation.apply(emily, ['friendly', 'evening']);
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

// var years = [1990, 1965, 1937, 2005, 2001];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for(var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2020 - el;
// }

// function isFullAge(limit, el) {
//   return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);

// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);

// Coding challenge 7

// (function() {
//   function Question(question, answers, correct) {
//       this.question = question;
//       this.answers = answers;
//       this.correct = correct;
//   }

//   Question.prototype.displayQuestion = function() {
//       console.log(this.question);

//       for (var i = 0; i < this.answers.length; i++) {
//           console.log(i + ': ' + this.answers[i]);
//       }
//   }

//   Question.prototype.checkAnswer = function(ans) {
//       if (ans === this.correct) {
//           console.log('Correct answer!');

//       } else {
//           console.log('Wrong answer. Try again :)')
//       }
//   }

//   var q1 = new Question('Is JavaScript the coolest programming language in the world?',
//                         ['Yes', 'No'],
//                         0);

//   var q2 = new Question('What is the name of this course\'s teacher?',
//                         ['John', 'Micheal', 'Jonas'],
//                         2);

//   var q3 = new Question('What does best describe coding?',
//                         ['Boring', 'Hard', 'Fun', 'Tediuos'],
//                         2);

//   var questions = [q1, q2, q3];

//   var n = Math.floor(Math.random() * questions.length);

//   questions[n].displayQuestion();

//   var answer = parseInt(prompt('Please select the correct answer.'));

//   questions[n].checkAnswer(answer);
// })();