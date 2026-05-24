// Task 1: Promise banao
// Ek promise banao jo 2 seconds baad resolve ho
// "Data load ho gaya!" message aaye

const loadData = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Data load ho gaya!");
    }, 2000)
})

loadData.then(msg => console.log(msg));


// Task 2: Async/Await se API call karo
// https://jsonplaceholder.typicode.com/users
// Sirf pehle 3 users ke names print karo

// const getUsers = async () => {
    // try {
        // fetch karo
        // .json() karo
        // pehle 3 users map se print karo
    // } catch(err) {
        // console.log("Error:", err);
    // }
// }


const getUsers = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        // const names = data.map(user => user.name);  // for all
        const names = data.slice(0,3).map(user => user.name);
        console.log(names);
        
        // console.log(data);
        
    }catch(err) {
         console.log("Error:", err);
    }
}




getUsers();