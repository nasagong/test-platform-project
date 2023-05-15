import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Loading = () =>{
    const navigate = useNavigate();
    const score = useSelector(state=>state.score);
    useEffect(()=>{
        if(score === 0 ){
            setTimeout(()=>navigate("/"),3000)
        } else{
            setTimeout(()=>navigate("/result"),3000)
        }
    })    
    return(
    <div>
        <h1>Now Loading ...</h1>
    </div>
    )
}

export default Loading;
