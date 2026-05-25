function StudentCard() {

    const Student = {
        name : "Keertan",
        age : 23,
        marks : 83,
        city : "Karachi",
        isPassed : true
    };

    return(
        <div>
            <h2>Student Info</h2>
            <p>Name : {Student.name}</p>
            <p>Age : {Student.age}</p>
            <p>Marks : {Student.marks}</p>
            <p>City : {Student.city}</p>
            <p>Passed : {Student.isPassed? "Pass": "Fail"}</p>
        </div>
    )



}

export default StudentCard;