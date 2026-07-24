import { useState } from "react";

const LikeButton = () => {

    const [likeCount, setLikeCount] = useState(0); 

    const Like = () => {
        setLikeCount( likeCount + 1 )
    } 

    function UnLike(){
        setLikeCount(likeCount > 0? likeCount -1 : 0);
    }

    function reset(){
        setLikeCount(0);
    }

    return ( 
        <>
            <h3>❤️ { likeCount }</h3>
            <div>
            <button onClick={Like} >Like ❤️</button>
            <button onClick={UnLike}>Unlike</button>
            <button onClick={reset}>Reset</button>
            </div>
        </>
     );
}
 
export default LikeButton;