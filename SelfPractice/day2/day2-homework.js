// 🏠 Day 2 Homework
// javascript
// const employees = [
//   { name: "Ahmed", salary: 50000, department: "IT", experience: 3 },
//   { name: "Sana", salary: 75000, department: "HR", experience: 7 },
//   { name: "Bilal", salary: 30000, department: "IT", experience: 1 },
//   { name: "Zara", salary: 90000, department: "Finance", experience: 10 },
//   { name: "Usman", salary: 45000, department: "IT", experience: 2 }
// ];


const employees = [
  { name: "Ahmed", salary: 50000, department: "IT", experience: 3 },
  { name: "Sana", salary: 75000, department: "HR", experience: 7 },
  { name: "Bilal", salary: 30000, department: "IT", experience: 1 },
  { name: "Zara", salary: 90000, department: "Finance", experience: 10 },
  { name: "Usman", salary: 45000, department: "IT", experience: 2 }
];


// Q1. map() — sirf names ka array nikalo

const names = employees.map(empl => empl.name);
console.log(names);

// Q2. filter() — salary 40000 se zyada wale employees nikalo

const empl40Kplus = employees.filter(empl => empl.salary >= 40000)
console.log(empl40Kplus);

// Q3. find() — "Zara" ko dhundho
const zara = employees.find(empl => empl.name == "Zara");
console.log(zara);

// Q4. reduce() — sab ki total salary nikalo
const totalSalary = employees.reduce( (total , employees ) => employees.salary + total, 0) ;
console.log(totalSalary);

// Q5. filter() + map() — IT department ke sirf names nikalo
const ITName = employees.filter(employees => employees.department == "IT")
                        .map(employees => employees.name);

console.log(ITName );

// Q6. Tricky 🔥 — map() se har employee ka yeh format banao:
employees.map(employees => console.log(`${employees.name} is in ${employees.department} department with ${employees.experience} year exprience`));
                        

