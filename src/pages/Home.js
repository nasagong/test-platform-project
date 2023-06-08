import { useNavigate } from "react-router-dom";
import * as Styled from "../styles/Home.styled";
import hero from "../images/hero.gif"
import hero2 from "../images/hero2.gif"
import hero3 from "../images/hero3.gif"

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/test");
  };
  return (
      <Styled.Body>
        <Styled.Title>Como soy en una relación?</Styled.Title>
        <Styled.Subtitle> ¡Únete a nosotros en esta encantadora exploración y descubre los increíbles secretos detrás de tu vida amorosa! ¡Guau-guau! </Styled.Subtitle>
        <Styled.Image src={hero3}/>
        <Styled.BtnContainer>
          <Styled.Btn onClick={onClick}> GO !</Styled.Btn>
        </Styled.BtnContainer>
      </Styled.Body>
  );
};

export default Home;
