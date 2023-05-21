import styled from "styled-components";

export const Body = styled.div`
  width: 300px;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 3.5rem;
  text-align: center;
  margin-top: 3rem;
`;

export const Subtitle = styled.div`
  margin-top:2rem;
`

export const Image = styled.div`
  background-color: grey;
  margin:3rem auto 0rem auto;
  width:200px;
  height:200px;
`
export const BtnContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Btn = styled.button`
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