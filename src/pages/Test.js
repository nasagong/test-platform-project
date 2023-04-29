import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

const Option = styled.button`
  width: 20rem;
  height: 2.5rem;
  font-size:1.7rem;
  margin: 0.5rem auto 0rem auto;
  border-radius: 10px;
  display: block;
`;

const Contents = styled.div`
  margin-top: 4rem ;
`
const Title = styled.h1`
  text-align: center;
`;
const Body = styled.div`
  height: 100vh;
  margin: auto;
  overflow: hidden;
  background-color: white;
`;

const questions = [
  {
    id: 1,
    text: "Question 1",
    question: "lorem ipsum is ",
    options: ["AAAAA", "BBBBB"],
    selected: "",
  },
  {
    id: 2,
    text: "Question 2",
    question: "lorem ipsum is ",
    options: ["AAAAA", "BBBBB"],
    selected: "",
  },
  {
    id: 3,
    text: "Question 3",
    options: ["AAAAA", "BBBBB"],
    selected: "",
  },
  {
    id: 4,
    text: "Question 4",
    options: ["AAAAA", "BBBBB"],
    selected: "",
  },
];

const Test = () => {
  const [slider, setSlider] = React.useState(null);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const handleOptionSelect = (questionId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: option,
    });
    slider.slickNext(); // Move to the next slide
  };

  const settings = {
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
            <Title>{question.text}</Title>
            {question.options.map((option) => (
              <Option onClick={() => handleOptionSelect(question.id, option)}>
                {/* Add onclick branch to last qustoin / extends map range */}
                {option}
              </Option>
            ))}
          </Contents>
        ))}
      </Slider>
    </Body>
  );
};

export default Test;
