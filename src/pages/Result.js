import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initialize } from '../state/module/score';

const dogs = {
    err : {
        name: "Error has occured",
        text: "Please try again."
    },
    welsh: {
        name: "Welsh Corgi",
        text: "- Soy muy relajada, y tomo suficiente tiempo antes de decidir.\n- Es muy importante tener La Paz. No me gusta tener problemas!\n- Soy muy independencia, necesito que respetes mi tiempo a solas."
    },
    poodle: {
        name: "Poodle",
        text: "-No deberías tomar mi atención como algo obvio\n-debe expresar su gratitud hacia mí por cuidar de ti.\n-Para mí, necesitas empatizar emocionalmente en lugar de dar consejos.\n- no me gusta que no lo hagamos como hemos planeado antes. El plan es importante!"
    },
    maltese: {
        name: "Maltese",
        text: "-Soy muy independencia, necesito que respetes mi tiempo a solas.\n-Me gustan las conversaciones y discusiones sobre mis intereses, así que tienes que escucharme y elogiarme.\n-Por favor, no haga comentarios ignorantes o palabras ligeras cuando hable conmigo."
    },
    pome: {
        name: "Pomeranian",
        text: "-Hablo muy directa. Espero que me entiendas!\n-¡Me gusta probar cosas que nunca antes había hecho!\n-Las personas que se me acercan demasiado emocionalmente son una carga y una molestia."
    },
    bichon: {
        name: "Bichon",
        text: "-Tengo una personalidad relajada y tranquila, así que aunque sea un poco lento, debes entender\n-Me gusta relajarme en casa, por eso lo paso mal con demasiadas citas.\n-Tengo un fuerte sentido de independencia, por lo que necesito respetar mi tiempo a solas."
    },
    yorkie: {
        name: "Yorkshire Terrier",
        text: "-Hablo muy directa. Espero que me entiendas!\n-Es tan difícil y agobiante tratar conmigo emocionalmente\n-No me gusta la gente que miente, así que necesito que sean honesto conmigo"
    },
    dacs: {
        name: "Dachshund",
        text: "-No me gusta mucho pelear, pero si lo haces, no pierdo. así que ten cuidado.\n-enseñame muchas cosas!\n-Es un inconveniente para mí inventar una historia que solo yo no sé."
    }
}
const Result = () => {
    const score = useSelector(state=>state.score);
    let currScore;
    let currDog;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onClick = () => { navigate("/")}

    const dogOptions = {
            0: dogs.err,
            1: dogs.welsh, // error page로 바로 날려야할듯?
            2: dogs.welsh,
            3: dogs.welsh,
            4: dogs.poodle,
            5: dogs.maltese,
            6: dogs.pome,
            7: dogs.bichon,
            8: dogs.yorkie,
            9: dogs.dacs
    };
    
    currDog = dogOptions[score];

    return(
        <div>
            <h1>Tu eres {currDog.name} !</h1>
            <h2>{currDog.text}</h2>
            <h2>score : {score}</h2>
            <button onClick={onClick}>HOME</button>
        </div>
    )
}

export default Result;