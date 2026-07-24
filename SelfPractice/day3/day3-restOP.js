const sum = (...numbers) =>{
    return numbers.reduce((total, num ) => total + num , 0)
};

console.log(sum(1,2,3,4,5));
console.log(sum(897,234,123,11));


// Spread vs Rest — Confusion mat karna:

// Rest → values ko ikhatta karta hai