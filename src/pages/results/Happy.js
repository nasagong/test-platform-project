import happy from "../../images/fast-cat-cat-excited.gif";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import saveAs from "file-saver";
import result from "../../images/dacs_result.jpg"
import domtoimage from 'dom-to-image';
import { useNavigate } from 'react-router-dom';
import { shareApi } from "../../utils/utilityFunctions";

const Happy = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingFinished(true);
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts
  }, []);
  const [loadingFinished, setLoadingFinished] = useState(false);
  if (!loadingFinished) {
    return <Loading />;
  }
  return (
    <Styled.Container className="resultPage">
      <Styled.Title>
        Tu eres <br /> Happy Cat !
      </Styled.Title>
      <Styled.Image src={happy} />
      <Styled.Description>
        <ul>
          <li>
          Prefiero comunicarme por llamadas en lugar de las redes sociales.
          </li>
          <li>
          Soy muy independiente, necesito que respetes mi tiempo a solas.
          </li>
          <li>
          Para mí, necesitas empatizar emocionalmente en lugar de dar consejos.
          </li>
        </ul>
      </Styled.Description>
      <Styled.BtnContainer>
        <Styled.BackToHome onClick={()=>navigate('/test')}>RETRY</Styled.BackToHome>
        <Styled.ShareBtn onClick={()=>shareApi()}>Share</Styled.ShareBtn>
      </Styled.BtnContainer>
    </Styled.Container>
  );
};

export default Happy;
