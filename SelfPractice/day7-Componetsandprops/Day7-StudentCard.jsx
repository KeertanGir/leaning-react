function NewStudentCard({ Name, Age, Marks, City, isPassed }) {

    return(
       <div>
            <h2>Student Info</h2>
            <p>Name : {Name}</p>
            <p>Age : {Age}</p>
            <p>Marks : {Marks}</p>
            <p>City : {City}</p>
            <p>Passed : {isPassed? "Pass": "Fail"}</p>
        </div>
    )

}

export default NewStudentCard;