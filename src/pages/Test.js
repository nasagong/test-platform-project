import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";

const Option = styled.button`
  @media (max-width: 768px) {
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
  }
  width: 30rem;
  height: 7rem;
  font-size: 1.7rem;
  color: black;
  margin: 1rem auto 0rem auto;
  background-color: #f8f9fa;
  border-radius: 1.5rem;
  display: block;
`;

const Contents = styled.div`
  margin-top: 4rem;
`;
const QuestionNumber = styled.h1`
  margin-left: 1rem;
  text-align: left;
  color: #bd597a;
`;

const Question = styled.div`
  font-weight: bold;
  margin: 2rem 0rem 0rem 1rem;
  font-size: 2rem;
  text-align: left;
`;

const BtnContainer = styled.div`
  margin-top: 5rem;
`;
const Body = styled.div`
  //너비 반응형으로 해야
  @media (max-width: 768px) {
    width: 400px;
  }
  width: 32rem;
  height: 100vh;
  margin: auto;
  overflow: hidden;
`;

const questions = [
  {
    id: 1,
    text: "Q1.",
    question: "primer cita!\ncomo me voy a vestir?",
    options: ["Ya tengo mi outfit perfecto", "Antes de salir, voy a elegir."],
    selected: "",
  },
  {
    id: 2,
    text: "Q2.",
    question: "mi novio/a quiere salira una fiesta!",
    options: [
      "quien te dio el permiso? quedate en tu casa!",
      "divertete, pero no olvides de avisarme cuando llegues a tu casa!",
    ],
    selected: "",
  },
  {
    id: 3,
    text: "Q3",
    question: "Estamos en el cuarto./nQue estamos haciendo?",
    options: ["Netflix", "Comiendo", "Hablando sobre un tema interesante"],
    selected: "",
  },
  {
    id: 4,
    text: "Q4",
    question: "lorem ipsum is ",
    options: ["AAAAA", "BBBBB"],
    selected: "",
  },
];

const Test = () => {
  const navigate = useNavigate();
  const [slider, setSlider] = React.useState(null);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [slideIndex, setSlideIndex] = React.useState(0);

  React.useEffect(() => {
    if (slideIndex === 0) {
     setSlideIndex(1);
    }
  }, [slideIndex]);

  const handleOptionSelect = (questionId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: option,
    });
    if (questionId === 4) {
      navigate("/result");
    } else {
      slider.slickNext();
    } // Move to the next slide
  };
  const handleSlideChange = () => {
    setSlideIndex(slideIndex + 1);
  };
  const settings = {
    afterChange: handleSlideChange,
    swipe: false,
    dots: false,
    arrows: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Body>
      <Slider ref={(c) => setSlider(c)} {...settings}>
        {questions.map((question) => (
          <Contents key={question.id}>
            <QuestionNumber>{question.text}</QuestionNumber>
            <Question>{question.question}</Question>
            <BtnContainer>
              {question.options.map((option) => (
                <Fade bottom when={question.id === slideIndex}>
                  <Option
                    onClick={() => handleOptionSelect(question.id, option)}
                  >
                    {/* Add onclick branch to last qustoin / extends map range */}
                    {option}
                  </Option>
                </Fade>
              ))}
            </BtnContainer>
          </Contents>
        ))}
      </Slider>
    </Body>
  );
};

export default Test;
