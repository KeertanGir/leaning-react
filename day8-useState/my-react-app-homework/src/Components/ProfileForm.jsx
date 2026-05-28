import { useState } from "react";

// ProfileForm.jsx banao
// - Name input field
// - Age input field  
// - City input field
// - Submit button
// - Submit pe neeche profile card dikh jaye:
// "Name: Keertan | Age: 23 | City: Karachi"

const ProfileForm = () => {

    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [City, setCity] = useState("");

    const [profile, setProfile] = useState(null);

    function profileData(event){

        event.preventDefault();

        setProfile({
            name: Name,
            age: Age,
            city: City
        })
    }

    return ( 
        <>
            <form onSubmit={profileData}>

                <input type="text" 
                    placeholder="Enter Name" 
                    value={Name} 
                    onChange={(e) => setName(e.target.value)} 
                />

                <input type="text"
                     placeholder="Enter Age" 
                     value={Age}  
                     onChange={(e) => setAge( e.target.value )} 
                />

                <input type="text"
                    placeholder="Enter City" 
                    value={City} 
                    onChange={(e) => setCity( e.target.value )} 
                />

                <button type="submit">Submit</button>
            </form>

            {
                profile && (
                    <div>
                        <h2>Name: {profile.name}</h2>
                        <h2>Age: {profile.age}</h2>
                        <h2>City: {profile.city}</h2>
                    </div>
                )

            }

        </>
     );
}
 
export default ProfileForm;