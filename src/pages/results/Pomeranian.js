import pome from "../../images/pome.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const Pomeranian = () => {
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
    </Styled.Container>
  );
};

export default Pomeranian;
