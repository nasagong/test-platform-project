import styled from "styled-components";
import Font from "react-font";

const Container = styled.div`
  @media (max-width: 414px) {
    width: 23rem;
    margin: auto auto;
  }
  display: flex;
  margin: auto auto;
  width: 500px;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;
const Contents = styled.div``;

const Loading = () => {
  return (
    <Container>
      <Contents>
        <Font family="pretendard">
          <h1>Now Loading ...</h1>
        </Font>
      </Contents>
    </Container>
  );
};

export default Loading;
