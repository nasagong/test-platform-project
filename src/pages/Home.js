import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Body = styled.div`
  width: 300px;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  text-align: center;
`;

const Title = styled.div`
  font-size: 3.5rem;
  text-align: center;
  margin-top: 3rem;
`;

const Subtitle = styled.div`
  margin-top:2rem;
`

const Image = styled.div`
  background-color: grey;
  margin:3rem auto 0rem auto;
  width:200px;
  height:200px;
`
const BtnContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.button`
  border-radius: 10rem;
  margin-top: 2rem;
  padding: 1rem 7rem;
  background-color: #ED0086;
  transition: background-color 0.5s ease-in-out;
  color: white;
  font-size: 1.5rem;
  &:hover {
    background-color: #E5A9B4;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/test');
  }
  return (
    <Body>
      <Title>Title</Title>
      <Subtitle> lorem ipsum is </Subtitle>
      <Image>IMAGE</Image>
      <BtnContainer>
        <Btn onClick={onClick}>TEST</Btn>
      </BtnContainer>
    </Body>
  );
};

export default Home;