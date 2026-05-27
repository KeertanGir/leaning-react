import { useState } from "react";



const Profile = ( {Name, Age, Online} ) => {

    const [name , setName] = useState(Name);
    const [age, setAge] = useState(Age);
    const [isOnline, setIsOnline] = useState(Online)


    return ( 
        <div>
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
            <p>Status : {isOnline? "Online 🟢" : "Offline 🔴"}</p>

            <button onClick={() => setAge(age+1)}> Birthday </button>
            <button onClick={() => setIsOnline(!isOnline)}>Toggle Status</button>
        </div>
     );
}
 
export default Profile;