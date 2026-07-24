import { useState } from "react";


const StudentForm = () => {

    const [name , setName] = useState("");
    const [uni, setUni] = useState("");
    const [sems, setSems] = useState("");

    const [student, setStudent] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        setStudent({
            name : name,
            university : uni,
            semester : sems
        });
        // console.log("Name:", name);
        // console.log("University:", uni);
        // console.log("Semester:", sems);
    }


    return ( 

        <>
        {/* <form onSubmit={(e) => e.preventDefault}> */}
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />

            <input
                type="text"
                placeholder="Enter University"
                value={uni}
                onChange={(e) => { setUni(e.target.value) }}
            ></input>

            <input 
                type="text"
                placeholder="Enter Semester"
                value={sems}
                onChange={(e) => { setSems(e.target.value) }}
            ></input>

            <button type="submit" >Submit</button>

             
        </form>

        {student && (
            <div>
                <h2>preview</h2>
                <p>Name : {student.name}</p>
                <p>University : {student.university}</p>
                <p>Semester : {student.semester}</p>
            </div>
        )}
           
        </>

     );
}
 
export default StudentForm;