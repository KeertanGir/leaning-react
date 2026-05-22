// Q1. Ek car object banao jisme brand, model, year ho — destructure karke teeno print karo.
console.log("Question 1");
const car = {
    brand: "Toyota",
    model: "Corola",
    year: 2023
}

const { brand, model, year } = car;

console.log(`Car brand is : ${brand}`);
console.log(`Car Model is : ${model}` );
console.log(`Car Year is : ${year}`);

// Q2. Ek array banao 5 numbers ka — destructure karke pehla, teesra aur paanchwa nikalo.

const numbers = [1,2,3,4,5];

const [first, , third, , fifth] = numbers;
console.log("Question 2");

console.log(first);
console.log(third);
console.log(fifth);


// Q3. Yeh arrow functions likho:
// subtract(a, b) → difference return kare
console.log("Question 3 => Arrow Function");


const substract = (a,b) => a-b;

// isEven(n) → true/false return kare

const isEven = (n) => {
    if(n%2 == 0 ){
        return "Even";
    }else{
        return "Odd";
    }
}

// fullName(first, last) → "First Last" return kare

const fullName = (first, last) =>{ return first + last; }


console.log(substract(12,3)); // 9
console.log(isEven(12));
console.log(fullName("keertan", "Gir"));





// Q4. Yeh object destructure karo aur template literal mein print karo:
console.log("Question 4");

const movie = {
  title: "Interstellar",
  director: "Nolan",
  year1: 2014,
  rating: 9.0
};

const { title, director , year1 , rating } = movie;
console.log(`This movie name is ${title}. Directed by ${director}, on year : ${year1} now rating id ${rating}`);

