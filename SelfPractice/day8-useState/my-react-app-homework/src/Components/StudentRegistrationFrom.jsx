import { useState } from "react";

const StudentRegistrationForm = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [uni , setUni] = useState("");
    const [semster , setSemster] = useState("");
    const [city , setCity] = useState("");
    

    const [student, setStudent] = useState(null);

    function setData(event){
        event.preventDefault();

        if (name === "" || email === "") {
            alert("Name and email are required");
        return;
        }

        setStudent({
            name : name,
            email : email,
            uni : uni,
            semster : semster,
            city : city
        })
    }

    function reSet(){
       setName("");
       setEmail("");
       setUni("");
       setSemster("");
       setCity("");
       setStudent(null);
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

        {
            student && (
                <div>
                    <h3>Name : {student.name}</h3>
                    <h3>Email : {student.email}</h3>
                    <h3>University : {student.uni}</h3>
                    <h3>Semester : {student.semster}</h3>
                    <h3>City : {student.city}</h3>
                </div>
            )
        }
    
    </> );
}
 
export default StudentRegistrationForm;