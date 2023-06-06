import styled from "styled-components";

export const Option = styled.button`
  @media (max-width: 414px) {
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
    font-size: 1.5rem;
  }
  font-family: 'Pretendard-thin';
  font-weight: bold;
  width: 30rem;
  height: 7rem;
  font-size: 1.7rem;
  color: black;
  margin: 1rem auto 0rem auto;
  background-color: #f8f9fa;
  border-radius: 1.5rem;
  border: none;
  display: block;
`;

export const Contents = styled.div`
  margin-top: 4rem;
`;

export const QuestionWrapper = styled.div`
  margin: 0 2rem;
  text-align: left;
`;

export const QuestionNumber = styled.h1`
  text-align: left;
  color: #bd597a;
`;

export const Question = styled.div`
  font-family: 'Pretendard-regular';
  margin: 2rem auto 0rem auto;
  font-size: 1.7rem;
`;

export const BtnContainer = styled.div`
  margin-top: 5rem;
`;

export const Body = styled.div`
  @media (max-width: 414px) {
    width: 25rem;
    margin: auto auto;
  }
  width: 35rem;
  height: 100vh;
  margin: auto auto;
`;