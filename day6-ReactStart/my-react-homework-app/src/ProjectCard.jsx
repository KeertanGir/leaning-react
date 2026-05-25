// Apne 2 projects dikhao — jo resume pe hain!
// Attendance Management System
// Lost and Found System

// Har project mein:
// - Project name
// - Tech stack: "React + Spring Boot"
// - Status: "In Progress 🚧"

function ProjectCard() {

    const projects = [
        {
            name: "Attendence Management System",
            tech: "Java Swing + OOPS + Core Java",
            status : true
        },
        {
            name: "Lost and Found System",
            tech: "React + Spring Boot",
            status : false
        }
    ]

    return (
        <div>
            {projects.map( prjct => (
                <div>
                    <h2>Name: {prjct.name} </h2>
                    <h2>Tech Stack : {prjct.tech}</h2>
                    <h2>Status : {prjct.status? "Completed!" : "In Progress"}</h2>
                </div>
            ))}
        </div>
    )    
}
        
    


export default ProjectCard