import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/**
 * 로딩창에서 바로 홈으로 돌아가거나 뒤로가기 연타시 뒤늦게 이동할 수 있음.. await 걸어서 이동시키는 편이 확실해보임
 */
const Loading = () =>{
    const navigate = useNavigate();
    const score = useSelector(state=>state.score);
    useEffect(()=>{
        if(score === 0 ){
            setTimeout(()=>navigate("/"),2000)
        } else{
            setTimeout(()=>navigate("/result"),2000)
        }
    })    
    return(
    <div>
        <h1>Now Loading ...</h1>
    </div>
    )
}

export default Loading;
