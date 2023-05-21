import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initialize } from "../state/module/score";
import { dogOptions } from "../utils/Result.dogs";
import styled from "styled-components";
import Loading from "./Loading";

const Body = styled.div`
  @media (max-width: 414px) {
    width: 23rem;
    margin: auto auto;
  }
  width:500px;
  margin: auto auto;
`
const Title = styled.h1`
  display:flex;
  justify-content: center;
`
const Image = styled.div`
  width: 300px;
  height: 300px;
  border:none;
  border-radius: 5rem;
  margin: 2rem auto;
  background-color: yellowgreen;
`
const Text = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.4rem;
  line-height: 1.2rem;
`
const Result = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingFinished(true);
    }, 1500);

    return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts
  }, []);

  const score = useSelector((state) => state.score);
  const [loadingFinished,setLoadingFinished] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = () => {
    navigate("/");
  };
  const currDog = dogOptions[score];

  if (!loadingFinished) {
    return <Loading />;
  }

  return (
    <Body>
      <Title>Tu eres<br/>{currDog.name} !</Title>
      <Image />
      <Text>{currDog.text}</Text>
      <h2>score : {score}</h2>
      <button onClick={onClick}>HOME</button>
    </Body>
  );
};

export default Result;
