const pizzaOrder = new Promise( (resolve, reject) => {
    const pizzaReady = true;
    if(pizzaReady){
        resolve("Pizza is Ready !");
    }else{
        reject("Pizza is not ready !");
    }
}  )

// way 1
pizzaOrder
        .then(msg => console.log(msg))
        .catch(err => console.log(err));


// way 2 using = async / await 
const orderPizza = async () => {
    try {
        const result = await pizzaOrder;
        console.log(result);
    }catch(err){
        console.log(err);
        
    }
}



orderPizza();

// directly bhi chal saghta hy.
const result = await pizzaOrder;
console.log(result);



