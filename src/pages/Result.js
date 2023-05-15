import { useSelector } from 'react-redux';

const Result = () => {
    const score = useSelector(state=>state.number);
    return(
        <div>
            <h1>RESULT PAGE</h1>
            <h2>{score}</h2>
        </div>
    )
}

export default Result;