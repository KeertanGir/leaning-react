// name, university, semester, skills (array)
// Skills map() se dikhao:
// Skills: React | Java | Spring Boot

function ProfileCard({name, university, semester, skills}){

    return(
        <div>
            <p>Name : {name} </p>
            <p>University : {university}</p>
            <p>Semester : {semester}</p>
            {/* Both are correct */}
            <p>Skills : { skills.map( s => s).join(" | ") }</p>
            {/* <p>
                Skills : { skills.map( skill => (
                    <span key={skill}> {skill} | </span>
                ) ) }
            </p> */}
        </div>
    )

}

export default ProfileCard;