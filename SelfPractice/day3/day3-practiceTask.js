// Task 1: Array spread
const frontend = ["React", "CSS", "HTML"];
const backend = ["Java", "Spring Boot", "MySQL"];
// Dono merge karo
const fullstack = [...frontend, ...backend];
console.log(fullstack);


// Task 2: Object spread
const student = { name: "Keertan", age: 20, city: "Karachi" };
// grade: "A" add karo
const studentResult = { ...student, grade: "A"}
console.log(student);

console.log(studentResult);


// Task 3: Rest
const firstAndRest = (first, ...rest) => {
    // first print karo
    console.log( "First : " + first);
    
    // rest ka sum print karo
    console.log( "Rest : " +
     rest.reduce((sum, num) => sum + num, 0)
     );
};
firstAndRest(10, 20, 30, 40);
// Expected: First: 10, Rest sum: 90