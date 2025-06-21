import {useState} from "react"; 
export default function LikeButton()
{
    let [isLiked,setIsLiked]=useState(false);
    let [clicks,setClicks]=useState(0);
    let styles={color:"red"};
    let toggleLike=()=>
    {
        setIsLiked(!isLiked);
        if(isLiked)
        setClicks((currValue)=>{
    return currValue-1;
    });
        else
        setClicks((currValue)=>{
    return currValue+1;
    });
    }
    return(
        <div>
            <p>clicks={clicks}</p>
            <p onClick={toggleLike}>
            {
                isLiked?(<i className="fa-solid fa-heart" style={styles}></i>):(<i className="fa-regular fa-heart"></i>)
            }
            </p>
            </div>
    );
}