import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initialize } from "../state/module/score";
import { dogOptions } from "../utils/Result.dogs";
import styled from "styled-components";
import Loading from "./Loading";
import bichon from "../images/bichon.png";
import dacs from "../images/dacs.png";
import maltee from "../images/maltese.png";
import pome from "../images/pome.png";
import poodle from "../images/poodle.png";
import retriver from "../images/retriever.jpeg";
import welsh from "../images/welsh.png";
import yorkie from "../images/yorkie.png";


const Body = styled.div`
  @media (max-width: 414px) {
    width: 23rem;
    margin: auto auto;
  }
  width: 500px;
  margin: auto auto;
`;
const Title = styled.h1`
  font-family:'Pretendard-regular';
  display: flex;
  justify-content: center;
`;
const Image = styled.div`
  width: 300px;
  height: 300px;
  border: none;
  border-radius: 5rem;
  margin: 2rem auto;
`;
const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
const Text = styled.div`
  font-family: 'Pretendard-thin';
  font-weight:600;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.4rem;
  line-height: 1.2rem;
`;
const Result = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingFinished(true);
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts
  }, []);

  const score = useSelector((state) => state.score);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = () => {
    navigate("/");
  };
  const currDog = dogOptions[score];
  const imageSrc = require(`../images/${currDog.temp}.png`);

  if (!loadingFinished) {
    return <Loading />;
  }

  return (
    <Body>
      <Title>
        Tu eres
        <br />
        {currDog.name} !
      </Title>
      <Image>
        <Img src={imageSrc.default} />
      </Image>
      <Text>{currDog.text}</Text>
    </Body>
  );
};

export default Result;
