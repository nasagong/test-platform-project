import pome from "../../images/pome.png";
import * as Styled from "../../styles/Results.styled";

const Pomeranian = () => {
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
