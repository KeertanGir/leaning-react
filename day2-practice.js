
console.log("...............map()...............");

const number = [1,2,3,4,5,6];
const double = number.map(num => num * 2);
console.log( double );

// Student ki koi list dekhni ho students se render kren ghy
const students = ["Keertan", "Ali", "Sara"];
students.map( Student => console.log(Student));

console.log("...............---------...............");
console.log("...............filter()...............");

const numbers2 = [1,2,3,4,5,6,7];
const evenNumber = numbers2.filter(num => num%2 === 0);
console.log(evenNumber);

const Students2 = [
    {name : "Keertan", marks: 85},
    {name : "Ali", marks : 45},
    {name : "Sara", marks : 72}
];

const passed = Students2.filter(Student2 => Student2.marks >= 50);
console.log(passed);

console.log("...............---------...............");
console.log("...............find()...............");

const found = Students2.find(Student2 => Student2.name === "Ali");
console.log(found);

console.log("...............---------...............");
console.log("...............reduce()...............");

const sum = number.reduce((total, num) => total + num, 0)
console.log(sum);
