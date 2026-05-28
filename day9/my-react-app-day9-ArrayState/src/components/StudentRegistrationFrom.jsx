import { useState } from "react";

// User input mein data type karta hai
//         ↓
// onChange state update karta hai
//         ↓
// Submit click hota hai
//         ↓
// setData function run hota hai
//         ↓
// preventDefault page reload rokta hai
//         ↓
// validation check hoti hai
//         ↓
// newStudent object banta hai
//         ↓
// students array mein add hota hai
//         ↓
// map() se screen par list show hoti hai



const StudentRegistrationForm = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [uni , setUni] = useState("");
    const [semster , setSemster] = useState("");
    const [city , setCity] = useState("");
    

    const [student, setStudent] = useState([]);

    function setData(event){
        event.preventDefault();

        if (name === "" || email === "") {
            alert("Name and email are required");
        return;
        }

        const newStudent = {
            name: name,
            email: email,
            university: uni,
            semester: semster,
            city: city,
        };

        setStudent( prev =>  [...prev, newStudent]);
    }

    function reSet(){
       setName("");
       setEmail("");
       setUni("");
       setSemster("");
       setCity("");
       setStudent([]);
    }
    
    return ( <>
        <form onSubmit={setData}>
            <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Enter Your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Enter Your University" value={uni} onChange={(e) => setUni( e.target.value )}/>
            <input type="text" placeholder="Enter Your Semster" value={semster} onChange={(e) => setSemster( e.target.value )}/>
            <input type="text" placeholder="Enter Your City" value={city} onChange={(e) =>  setCity( e.target.value )}/>

            <button type="submit" >Submit</button>
            <button type="button" onClick={reSet} > reset  </button>
        </form>

        {/* {
            student && (
                <div>
                    <h3>Name : {student.name}</h3>
                    <h3>Email : {student.email}</h3>
                    <h3>University : {student.uni}</h3>
                    <h3>Semester : {student.semster}</h3>
                    <h3>City : {student.city}</h3>
                </div>
            )
        } */}

        {
         student.map((student, index) => (
            <div key={index}>
              <h3>Student {index + 1}</h3>
              <p>Name: {student.name}</p>
              <p>Email: {student.email}</p>
              <p>University: {student.university}</p>
              <p>Semester: {student.semester}</p>
              <p>City: {student.city}</p>
            </div>
))}
    
    </> );
}
export default StudentRegistrationForm;