// // Basics
// console.log('Hello World!!!');

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// // --------------------------------------------------------------

// // Coding Challenge 1
// var markHeight = 5.0, markWeight = 123.0;
// var johnHeight = 4.5, johnWeight = 120.0;

// var markBMI, johnBMI;

// markBMI = markWeight / (markHeight * markHeight);
// johnBMI = johnWeight / (johnHeight * johnHeight);

// console.log('Marks BMI is ' + markBMI);
// console.log('Johns BMI is ' + johnBMI);

// // --------------------------------------------------------------

// // if / else statement
// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus == 'married') {
//   console.log('Married');
// } else {
//   console.log('Single');
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married');
// } else {
//   console.log(firstName + ' is single');
// }

// // --------------------------------------------------------------

// // Boolean Logic
// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//   console.log(firstName + ' is a boy');
// } else if (age > 14 && age < 18) {
//   console.log(firstName + ' is a teenager');
// } else {
//   console.log(firstName + ' is a man');
// }

// // --------------------------------------------------------------

// // Ternary Operator and Switch statements
// var firstName = 'John';
// var age = 19;

// // Ternary
// age >= 18 ? console.log(firstName + ' drinks beer!')
// : console.log(firstName + ' drinks juice!');

// var drink = age >= 18 ? 'beer' : 'juice';

// console.log(firstName + ' can only drink ' + drink);

// // Switch Statments
// var job = 'teacher';
// switch (job) {
//   case 'teacher':
//     console.log(firstName + ' is a teacher');
//     break;
//   case 'driver':
//     console.log(firstName + ' is a driver');
//     break;
//   case 'designer':
//     console.log(firstName + ' is a designer');
//     break;
//   default:
//     console.log(firstName + ' is unemployed');
// }

// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy');
//     break;
//   case age > 14 && age < 18:
//     console.log(firstName + ' is a teenager');
//     break;
//   default:
//     console.log(firstName + ' is a man');
// }

// // --------------------------------------------------------------

// // Truthy and Falsy values and euality operators

// // Falsy values: undefined, null, 0, '', Nan
// // Truthy values: NOT FALSY VALUES

// var height;

// if (height) {
//   console.log('variable is defined');
// } else {
//   console.log('variable is undefined');
// }

// // --------------------------------------------------------------

// // CODING CHALLENGE 2
// var johnsTeamTOT = 120+89+103;
// var mikesTeamTOT = 116+94+123;
// var marysTeamTOT = 97+134+105;

// var johnsTeamAVG = johnsTeamTOT/3;
// var mikesTeamAVG = mikesTeamTOT/3;
// var marysTeamAVG = marysTeamTOT/3;

// if (johnsTeamAVG > mikesTeamAVG && johnsTeamAVG > marysTeamAVG) {
//   console.log(johnsTeamAVG);
//   console.log(mikesTeamAVG);
//   console.log(marysTeamAVG);
//   console.log('Johns Team Average is higher than Mikes Team and Marys Team with ' + johnsTeamAVG);
// } else if (mikesTeamAVG >johnsTeamAVG  && mikesTeamAVG > marysTeamAVG) {
//   console.log(johnsTeamAVG);
//   console.log(mikesTeamAVG);
//   console.log(marysTeamAVG);
//   console.log('Mikes Team Average is higher than Johns Team and Marys Teamwith ' + mikesTeamAVG);
// } else if (marysTeamAVG >johnsTeamAVG  && marysTeamAVG > mikesTeamAVG) {
//   console.log(johnsTeamAVG);
//   console.log(mikesTeamAVG);
//   console.log(marysTeamAVG);
//   console.log('Marys Team Average is higher than Johns Team and Mikes Team with ' + marysTeamAVG);
// } else {
//   console.log(johnsTeamAVG);
//   console.log(mikesTeamAVG);
//   console.log(marysTeamAVG);
//   console.log('Each teams average is the same');
// }

// // --------------------------------------------------------------

// // Functions
// function calcAge(birthYear) {
//   return 2020 - birthYear;
// }

// var year = 1996; 
// console.log(calcAge(year));

// function yearsTilRet(birthYear, firstName) {
//   var age = calcAge(birthYear);
//   var retirement = 85 - age;
//   console.log(firstName + ' has ' + retirement + ' years till retirement');
// }

// yearsTilRet(year, 'Dominic');

// // --------------------------------------------------------------

// // Function Statements and Expressions

// // Function expression
// var whatDoYouDo = function(job, firstName) {
//   switch(job) {
//     case 'teacher':
//       return firstName + ' is a teacher!';
//     case 'driver':
//       return firstName + ' is a driver!';
//     case 'designer':
//       return firstName + ' is a designer!';
//     default:
//       return firstName + ' is unemployed';
//   }
// }

// console.log(whatDoYouDo('designer', 'Dom'));

// // --------------------------------------------------------------

// // Arrays
// Initialize Array
// var names = ['John', 'Jane', 'Dom'];
// var years = new Array(1996, 2000, 2010);

// console.log(names);
// console.log(names.length);

// // Mutate Array Data
// names[1] = 'ben';
// names[names.length] = 'Mary';
// console.log(names);

// // Different data tyles
// var john = ['John', 'Smith', 1990, 'teacher', false];

// // add end to array
// john.push('blue');
// // add at the beginning of array
// john.unshift('Mr.');
// console.log(john);

// // remove last thing from array
// john.pop();
// // remove first thing from array
// john.shift();
// // returns position of that item in array
// john.indexOf(1990);

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);

// // --------------------------------------------------------------

// // CODING CHALLENGE 3
// function tipCalc(bill) {
//   if (bill < 50) {
//     return bill*0.2;
//   } else if (bill >= 50 && bill < 200) {
//     return bill*0.15;
//   } else {
//     return bill*0.1;
//   }
// }

// var subtotal = [124.0, 48.0, 268.0]

// var tipAmmount = new Array();
// var total = new Array();

// tipAmmount[0] = tipCalc(subtotal[0]);
// tipAmmount[1] = tipCalc(subtotal[1]);
// tipAmmount[2] = tipCalc(subtotal[2]);
// console.log(tipAmmount);

// total[0] = tipCalc(subtotal[0]) + subtotal[0];
// total[1] = tipCalc(subtotal[1]) + subtotal[1];
// total[2] = tipCalc(subtotal[2]) + subtotal[2];
// console.log(total);

// // --------------------------------------------------------------

// // Objects and Properties
// Object Literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.lastName = 'Doe';
// jane.birthYear = 1996;

// // --------------------------------------------------------------

// // Objects and Methods
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function(birthYear) {
//     return 2020-birthYear;
//   }
// };

// // --------------------------------------------------------------

// // CODING CHALLENEG 4
// var Mark = {
//   firstName: 'Mark',
//   lastName: 'Smith',
//   weight: 160.0,
//   height: 6.0,
//   calcBMI: function() {
//     return this.bmi = this.weight / (this.height * this.height);
//   }
// }
// var John = {
//   firstName: 'John',
//   lastName: 'Doe',
//   weight: 160.0,
//   height: 6.0,
//   calcBMI: function() {
//     return this.bmi = this.weight / (this.height * this.height);
//   }
// }

// if (Mark.calcBMI() > John.calcBMI()) {
//   console.log('Mark has a larger BMI with ' + Mark.calcBMI());
// } else if (Mark.bmi < John.bmi) {
//   console.log('John has a larger BMI with ' + John.calcBMI());
// } else {
//   console.log('Mark and John have the same BMI with ' + Mark.calcBMI());
// }

// // --------------------------------------------------------------

// // Loops and iterations

// // For loop
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'teacher', false];

// for (var j =0; j < john.length; j ++) {
//   console.log(john[j]);
// }

// // While loop
// var j = 0;
// while (j < john.length) {
//   console.log(john[j]);
//   j++;
// }

// // Continue and break statements

// var john = ['John', 'Smith', 1990, 'teacher', false];

// for (var j =0; j < john.length; j ++) {
//   if (typeof john[j] !== 'string') continue;
//   console.log(john[j]);
// }

// for (var j =0; j < john.length; j ++) {
//   if (typeof john[j] !== 'string') break;
//   console.log(john[j]);
// }

// // Looping backwards
// for (var j = john.length-1; j >= 0; j--) {
//   // if (typeof john[j] !== 'string') continue;
//   console.log(john[j]);
// }

// // --------------------------------------------------------------

// // CODING CHALLENEGE 5
// function findAVG(bills) {
//   var numOfBills = bills.length;
//   var total = 0; 
//   for (var i = 0; i < bills.length; i++) {
//     total += bills[i];
//   }
//   var average = total / numOfBills;
//   console.log(average)
//   return average;
// }

// var John = {
//   bill: [124, 48, 268, 180, 42],
//   tipAmmount: [],
//   tipCalc: [],
//   calculate: function() {
//     for (var i = 0; i < this.bill.length; i++) {
//       if (this.bill[i] < 50) {
//         this.tipAmmount.push(this.bill[i] * 0.2);
//         this.tipCalc.push(this.tipAmmount[i] + this.bill[i]);
//       } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
//         this.tipAmmount.push(this.bill[i] * 0.15);
//         this.tipCalc.push(this.tipAmmount[i] + this.bill[i]);
//       } else {
//         this.tipAmmount.push(this.bill[i] * 0.1);
//         this.tipCalc.push(this.tipAmmount[i] + this.bill[i]);
//       }
//     }
//   }
// }

// var Mark = {
//   bill: [77, 375, 110, 45],
//   tipAmmount: [],
//   tipCalc: [],
//   calculate: function() {
//     for (var i = 0; i < this.bill.length; i++) {
//       if (this.bill[i] < 100) {
//         this.tipAmmount.push(this.bill[i] * 0.2);
//         this.tipCalc.push(this.tipAmmount[i] + this.bill[i]);
//       } else if (this.bill[i] >= 100 && this.bill[i] <= 300) {
//         this.tipAmmount.push(this.bill[i] * 0.1);
//         this.tipCalc.push(this.tipAmmount[i] + this.bill[i]);
//       } else {
//         this.tipAmmount.push(this.bill[i] * 0.25);
//         this.tipCalc.push(this.tipAmmount[i] + this.bill[i]);
//       }
//     }
//   }
// }
// John.calculate();
// Mark.calculate();

// if (findAVG(John.tipAmmount) > findAVG(Mark.tipAmmount)) {
//   console.log("Johns family had a bigger tip average");
// } else if (findAVG(John.tipAmmount) < findAVG(Mark.tipAmmount)) {
//   console.log("Marks family had a bigger tip average");
// } else {
//   console.log('EQUAL');
// }
