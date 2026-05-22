const students = [
  { name: "Keertan", marks: 85, city: "Karachi" },
  { name: "Ali", marks: 45, city: "Lahore" },
  { name: "Sara", marks: 72, city: "Karachi" },
  { name: "Hamza", marks: 38, city: "Islamabad" },
  { name: "Ayesha", marks: 91, city: "Karachi" }
];

// Task 1: map() — sirf names ka array nikalo
// Expected: ["Keertan", "Ali", "Sara", "Hamza", "Ayesha"]
console.log("Task 1: map()");

const names = students.map(Student => Student.name);
console.log(names);


// Task 2: filter() — sirf pass students nikalo (marks >= 50)
// Expected: Keertan, Sara, Ayesha
console.log("Task 2: filter()");

const passedStudents = students.filter( student => student.marks >= 50 );
console.log(passedStudents);


// Task 3: find() — "Sara" ko dhundho
// Expected: { name: "Sara", marks: 72, city: "Karachi" }

console.log("Task 3: find()");
const sara = students.find(students => students.name == "Sara");
console.log(sara);


// Task 4: reduce() — sab ka total marks nikalo
// Expected: 331

console.log("Task 4: reduce()");
const marks = students.reduce( (total, students) => students.marks + total, 0);
console.log(marks);


// Task 5: filter() + map() chain — 
// Karachi ke students ke sirf naam nikalo
// Expected: ["Keertan", "Sara", "Ayesha"]

console.log("Task 5: filter() + map()");
const karachiStudents = students.filter(Student => Student.city === "Karachi").map(Student => Student.name);
console.log(karachiStudents);
