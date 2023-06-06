import welsh from "../../images/welsh.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const Welsh = () => {
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
        {" "}
        Tu eres <br /> Welsh Corgi !{" "}
      </Styled.Title>
      <Styled.Image src={welsh} />
      <Styled.Description>
        <ul>
          <li>Debes expresar tu gratitud hacia mi por cuidar de ti.</li>
          <li>Es muy importante tener La Paz. No me gusta tener problemas!</li>
          <li>
            Soy muy independencia, necesito que respetes mi tiempo a solas.
          </li>
        </ul>
      </Styled.Description>
    </Styled.Container>
  );
};

export default Welsh;
