import styled from "styled-components";

export const Body = styled.div`
  @media screen and (min-width: 500px) {
    width:400px;
  }
  width: 300px;
  height: 100%;
  margin: auto;
  overflow: hidden;
  text-align: center;
`;

export const Title = styled.div`
  font-family: 'Pretendard-regular';
  font-weight: 800;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 3rem;
`;

export const Subtitle = styled.div`
  font-family: 'Pretendard-thin';
  font-weight: 600;
  font-size:1.5rem;
  margin-top:2rem;
`

export const Image = styled.img`
  margin:3rem auto 0rem auto;
  width:200px;
  height:200px;
`
export const BtnContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Btn = styled.button`
  border: none;
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