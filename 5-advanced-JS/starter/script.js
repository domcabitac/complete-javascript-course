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

// Primitives vs objects 

// Primatives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: 'John',
  age: 26
}

var obj2 = obj1;
obj2.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Function
var age = 27;
var obj = {
  name: 'Dom',
  city: 'Oshawa'
}

function change(a, b) {
  a = 30;
  b.city = 'Toronto';
}

change(age, obj);
console.log(age);
console.log(obj.city);
