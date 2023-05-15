import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initialize } from '../state/module/score';

const Result = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onClick = () => { navigate("/")}
    const score = useSelector(state=>state.score);
    return(
        <div>
            <h1>RESULT PAGE</h1>
            <h2>{score}</h2>
            <button onClick={onClick}>HOME</button>
        </div>
    )
}

export default Result;