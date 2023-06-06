import { useNavigate } from "react-router-dom";
import * as Styled from "../styles/Home.styled";
import WelshRunning from "../images/welsh_run.gif"
const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/test");
  };
  return (
      <Styled.Body>
        <Styled.Title>Pup Love</Styled.Title>
        <Styled.Subtitle> ¡Únete a nosotros en esta encantadora exploración y descubre los increíbles secretos detrás de tu vida amorosa! ¡Guau-guau! </Styled.Subtitle>
        <Styled.Image src={WelshRunning}/>
        <Styled.BtnContainer>
          <Styled.Btn onClick={onClick}>TEST</Styled.Btn>
        </Styled.BtnContainer>
      </Styled.Body>
  );
};

export default Home;
