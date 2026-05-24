// const getUsers = async () => {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = response.json();
//         console.log(data);
        
//     }catch(err){
//         console.log("Error : "+ err);
        
//     }
// }

const getUsers = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();  // await is important
        console.log(data);
        

    }catch(err){
        console.log("Error : "+ err);
        
    }
}

getUsers();
