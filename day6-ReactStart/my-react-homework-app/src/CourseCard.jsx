function CourseCard() {


    const Course = {
        title : "React",
        instructor: "claude",
        duration: "8 weeks",
        completed: false
    }


// Status: "In Progress ⏳" ya "Completed ✅"
// Ternary operator use karo!
    return(
        <div>
            <h2>Course Info</h2>
            <p>Course Title: {Course.title}</p>
            <p>Course Instructor: {Course.instructor}</p>
            <p>Course Duration: {Course.duration}</p>
            <p>Status: {Course.completed? "Completed ✅" : "In Progress ⏳"}</p>
        </div>
    )

}

export default CourseCard;