import { useState } from "react";



const CircketProductToggle = () => {

    const [show, setShow] = useState(false);

    function toggleProduct(){
        setShow(!show)
    }

    return (  
       <>
           <h1>Cricket Product</h1>

           <button onClick={toggleProduct}>{show? "Hide Product" : "Show Product"}</button>

           { show && (
                <div>
                    <h2>SS Sky 2.0 Bat</h2>
                    <p>Price: $450 CAD</p>
                    <p>Free Machine Knocking</p>
                </div>
           )
           }

       </> 
    );
}
 
export default CircketProductToggle;