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
        <Styled.Title>Pup Love:<br/> Find Your Relationship Type</Styled.Title>
        <Styled.Subtitle> Join us in this charming exploration and uncover the paw-some secrets behind your love life! Woof-woof! </Styled.Subtitle>
        <Styled.Image src={WelshRunning}/>
        <Styled.BtnContainer>
          <Styled.Btn onClick={onClick}>TEST</Styled.Btn>
        </Styled.BtnContainer>
      </Styled.Body>
  );
};

export default Home;
