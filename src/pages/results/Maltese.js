import maltese from "../../images/maltese.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import { shareApi } from "../../utils/utilityFunctions";

const Maltese = () => {
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
        Tu eres <br /> Maltese !
      </Styled.Title>
      <Styled.Image src={maltese} />
      <Styled.Description>
        <ul>
          <li>
            Soy muy independiente, necesito que respetes mi tiempo a solas.
          </li>
          <li>
            Me gustan las conversaciones y discusiones sobre mis intereses, así
            que tienes que escucharme poner atención
          </li>
          <li>
            Por favor, no hagas comentarios ignorantes o groseras cuando hables
            conmigo.
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

export default Maltese;
