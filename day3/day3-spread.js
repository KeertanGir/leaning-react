const array1 = [1,2,3,4];
const array2 = [4,5,6,7];

//  merge krna
const merge = [...array1, ...array2];
console.log(merge);

// Copu krna
const orignal = [1,3,4,5,6];
const copy = [...orignal]
copy.push(7);

console.log(orignal); // safe
console.log(copy); // changed

//  Object Spread

const student = { name: "Keertan", age: 22 };
const updated = { ...student, city: "Karachi" }

console.log(student);
console.log(updated);



// Spread vs Rest — Confusion mat karna:
// Spread → array/object ko kholta hai



