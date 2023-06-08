import pome from "../../images/pome.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import { shareApi } from "../../utils/utilityFunctions";

const Pomeranian = () => {
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
    <Styled.Container>
      <Styled.Title>
        Tu eres <br /> Pomeranian !
      </Styled.Title>
      <Styled.Image src={pome} />
      <Styled.Description>
        <ul>
          <li>Soy muy directo. Espero que me entiendas!</li>
          <li>¡Me gusta probar cosas que nunca antes había probado!</li>
          <li>
            Las personas que se me acercan demasiado emocionalmente son una
            carga y una molestia.
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

export default Pomeranian;
