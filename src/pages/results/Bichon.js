import bichon from "../../images/bichon.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const Bichon = () => {
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
        Tu eres <br /> Bichon !
      </Styled.Title>
      <Styled.Image src={bichon} />
      <Styled.Description>
        <ul>
          <li>
            Tengo una personalidad relajada y tranquila, así que aunque sea un
            poco lento, debes entender
          </li>
          <li>
            Me gusta relajarme en casa, por eso lo paso mal con demasiadas
            citas.
          </li>
          <li>
            Tengo un fuerte sentido de independencia, por lo que necesito
            respetar mi tiempo a solas.
          </li>
        </ul>
      </Styled.Description>
    </Styled.Container>
  );
};

export default Bichon;
