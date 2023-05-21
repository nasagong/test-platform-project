import { useNavigate } from "react-router-dom";
import * as Styled from '../styles/Home.styled'

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/test');
  }
  return (
    <Styled.Body>
      <Styled.Title>Title</Styled.Title>
      <Styled.Subtitle> THIS IS TEST TEXT </Styled.Subtitle>
      <Styled.Image>IMAGE</Styled.Image>
      <Styled.BtnContainer>
        <Styled.Btn onClick={onClick}>TEST</Styled.Btn>
      </Styled.BtnContainer>
    </Styled.Body>
  );
};

export default Home;