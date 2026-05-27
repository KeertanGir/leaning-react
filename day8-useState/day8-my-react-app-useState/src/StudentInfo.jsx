import { useState } from "react";


const StudentInfo = ({Name, Marks, Passed}) => {

    const [student, setStudent ] = useState({
        name : Name,
        marks : Marks,
        isPassed : Passed
    }) 

    return ( 
        <>
            <h2>Name  : {student.name}</h2>
            <h2>Marks : {student.marks}</h2>
            <h2>Result : {student.isPassed? "Pass ✅": "Fail ❌"}</h2>

            {/* Spread operator se update karo! */}
            <button onClick={() => setStudent({...student, marks:95 })} >Increase Marks</button>
            <button onClick={() => setStudent({...student, name : "Keertan Gir Goswami"})}>Full Name</button>
        </>
     );
}
 
export default StudentInfo;