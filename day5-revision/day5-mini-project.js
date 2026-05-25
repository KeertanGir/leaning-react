// Student management System
// Students data
const students = [
  { id: 1, name: "keertan", marks: 85, city: "karachi" },
  { id: 2, name: "ali", marks: 45, city: "lahore" },
  { id: 3, name: "sara", marks: 72, city: "karachi" },
  { id: 4, name: "hamza", marks: 38, city: "islamabad" },
  { id: 5, name: "ayesha", marks: 91, city: "karachi" }
];

// Task 1: Arrow function — getStudent(id)
// id se student nikalo aur return karo

const getStudent = (id) => {
    const student = students.find(std => std.id === id);
    return student;
}

console.log(getStudent(2));


// Task 2: filter() — getPassedStudents()
// marks >= 50 wale nikalo

const passedStudents = students.filter(std => std.marks >= 50);
console.log(passedStudents);


// Task 3: map() + capitalize
// Har student ka naam capital karo
// "keertan" → "Keertan"

const capNames = (str) => str[0].toUpperCase() + str.slice(1);

const Names = students.map(std => capNames(std.name))
console.log(Names);

console.log();


// Task 4: reduce() — getAverage()
// Sab ka average marks nikalo

const getAverage = () => {
  const total = students.reduce((total, students) => students.marks + total , 0);
  // const totalStudent = students.reduce(count => count +1 , 0)

  return total/ students.length ;
}

console.log(getAverage());




// Task 5: Async/Await — fetchAndDisplay()
// https://jsonplaceholder.typicode.com/users se data fetch karo
// Sirf name aur email print karo har user ka

const fetchAndDisplay = async () => {
  try{
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await users.json();
      userData.map(usr => console.log(`Name : ${usr.name}\nEmail : ${usr.email}`));
  }catch(err){
    console.log(err);
    
  }
}

fetchAndDisplay();


// Task 6: Spread — addStudent()
// Naya student add karo — original array change na ho!

addStudent = (student) => {
  const newStudent = [ ...students, student]; 
  return newStudent;
}

const students2 = addStudent( { id: 6, name: "Chander", marks: 85, city: "karachi" });

console.log(students);
console.log(students2);



