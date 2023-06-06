import yorkie from "../../images/yorkie.png";
import * as Styled from "../../styles/Results.styled";

const Yorkie = () => {
  return (
    <Styled.Container>
      <Styled.Title>
        Tu eres <br /> Yorkshire Terrier !
      </Styled.Title>
      <Styled.Image src={yorkie} />
      <Styled.Description>
        <ul>
          <li>Soy muy directo. Espero que me entiendas!</li>
          <li>Es tan difícil y agobiante tratar conmigo emocionalmente.</li>
          <li>
            No me gusta la gente que miente, así que necesito que seas honestos
            conmigo.
          </li>
        </ul>
      </Styled.Description>
    </Styled.Container>
  );
};

export default Yorkie;
