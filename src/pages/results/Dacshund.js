import dacs from "../../images/dacs.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const Dachshund = () => {
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
        Tu eres <br /> Dachshund !
      </Styled.Title>
      <Styled.Image src={dacs} />
      <Styled.Description>
        <ul>
          <li>
          No me gusta pelear demasiado, pero si lo haces, no pierdo. así que ten cuidado.
          </li>
          <li>
          Enséñame muchas cosas!
          </li>
          <li>
          Es muy inconveniente para mí inventar una historia que solo yo no sé.
          </li>
        </ul>
      </Styled.Description>
    </Styled.Container>
  );
};

export default Dachshund;
