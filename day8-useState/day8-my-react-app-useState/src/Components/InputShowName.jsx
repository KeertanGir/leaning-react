import { useState } from "react";

const InputShowName = () => {
 

    const [name , setName] = useState("");

    function handleNameChange(event){
        setName(event.target.value)
    }
    

 
    return ( 
        <>
            <input 
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleNameChange}
            ></input>

            <h1>Name : {name}</h1>
        </>
     );
}
 
export default InputShowName;