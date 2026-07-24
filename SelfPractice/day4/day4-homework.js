const students = [
  { id: 1, name: "Keertan", marks: 85 },
  { id: 2, name: "Ali", marks: 45 },
  { id: 3, name: "Sara", marks: 72 }
];
// Q1. Promise banao jo resolve kare student id 1 ka data — .then() se print karo

const getStudentOne = new Promise((resolve, reject) => {

    const stdudent= students.find( stdu => stdu.id === 2 );

    if(stdudent){
        // console.log(stdudent);
        resolve(stdudent);
    }else{
        reject("Student nhi mila");
    }

})

getStudentOne
    .then(std => console.log(std))
    .catch(std => console.log(std));


// Q2. Async/Await function banao getStudent(id) — jo id se student dhunde aur print kare:

const getStudent = async (id) => {

    try{
        const std =  students.find(std => std.id === id)
        console.log(std);   
    }catch(err){
        console.log("Student nhi mila",);       
    }
}

getStudent(2);

// Q3. API call karo https://jsonplaceholder.typicode.com/posts se:
// Sirf pehle 5 posts nikalo
// Har post ka title print karo

const getAllTitles = async () => {
    try{
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const alltitles = await posts.json();
        const titles = alltitles.slice(0,5).map(posts => posts.title);
        console.log(titles);       
    }catch(err){
        console.log(err);  
    }
}

getAllTitles();


// Q4. Tricky 🔥 — API call karo https://jsonplaceholder.typicode.com/users/1 se:
// User ka name, email, aur company.name print karo
// Template literal mein:

const getUserData = async () => {

    try{
        const user = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const userdata = await user.json();
        console.log(`Name : ${userdata.name}\nEmail : ${userdata.email}\nCompany : ${userdata.company.name}`);
        
    }catch(err){
        console.log(err);
        
    }
}

getUserData();