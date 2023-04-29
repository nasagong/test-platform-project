import styled from "styled-components";
import {Link} from 'react-router-dom';

const Body = styled.div`
  width: 300px;
  height: 100vh;
  margin: auto;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 3rem;
`;

const TestContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Test = styled.div`
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 2rem 8rem;
  background-color: grey;
  transition: background-color 0.5s ease-in-out;
  color: white;
  font-size: 1.5rem;
  &:hover {
    background-color: #E2E2E2;
  }
`;

const Home = () => {
  return (
    <Body>
      <Title>Test something</Title>
      <TestContainer>
        <Test><Link to="/test">TEST</Link></Test>
        <Test>TEST</Test>
        <Test>TEST</Test>
        <Test>TEST</Test>
      </TestContainer>
    </Body>
  );
};

export default Home;