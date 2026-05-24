import { capitalize } from "./day3-utilHomework.js"

//  ################### Spread ##########################

const team1 = [
  { name: "Keertan", role: "Frontend" },
  { name: "Ali", role: "Backend" }
];
const team2 = [
  { name: "Sara", role: "Designer" },
  { name: "Hamza", role: "DevOps" }
];

// Q1. Spread — dono teams merge karo ek fullTeam array mein

const fullTeam = [...team1, ...team2];
console.log(fullTeam);

// Q2. Spread — team1 ki copy banao aur usme ek naya member add karo — original change na ho!

const team1copy = [...team1, { name: "Esha", role: "Fullstack" }];
console.log(team1);
console.log(team1copy);



// Q3. Object spread — yeh object mein experience: 3 add karo:
const dev = { name: "Keertan", skills: ["React", "Java"] };



const  updateddev = {...dev, experience: 3}

console.log(dev);
console.log(updateddev);




//  ################### rest Operator ##########################

// Q4. Rest — ek function introduce banao:
// Pehla argument name ho
// Baaki sab skills hon
// Print kare: "Keertan knows: React, Java, Spring Boot"

const indroduce = (name , ...skills) =>{
        console.log(`${name} knows : ${skills.join(", ")}`);
        // `${name} knows: ${skills.join(", ")}`
        
}

indroduce("Keertan", "java", "react", "spring boot", "Mysql");

indroduce("Keertan", "java ", "react ", "spring boot ", 12);




//  ################### ES6 import/export ##########################
// Q5. Tricky 🔥 — Modules:
// day3-utils.js file banao
// capitalize(str) function export karo — string ka pehla letter capital kare
// day3-homework.js mein import karke use karo 
                // Uper import kr liya hy
    console.log(capitalize("keertan"));
    console.log(capitalize("java"));
    console.log(capitalize("sptingboot"));
    console.log(capitalize("react"));
    
    
    
    




