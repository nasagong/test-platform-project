import retriever from "../../images/retruever.jpeg";
import * as Styled from "../../styles/Results.styled";

const Retriever = () => {
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

export default Retriever;
