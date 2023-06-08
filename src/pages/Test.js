import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increase, initialize } from "../state/module/score";
import * as Styled from "../styles/Test.styled";
import { questions } from "../utils/Test.questions";
import { moveToResult } from "../utils/utilityFunctions";

const Test = () => {
  useEffect(() => {
    dispatch(initialize());
  }, []);
  const score = useSelector(state=>state.score);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increase());
  };
  const navigate = useNavigate();
  const [slider, setSlider] = useState(null);
  // const [selectedOptions, setSelectedOptions] = useState({});
  const [slideIndex, setSlideIndex] = useState(0);
  //const [score, setScore] = useState(0);

  useEffect(() => {
    if (slideIndex === 0) {
      setSlideIndex(1);
    }
  }, [slideIndex]);

  const handleOptionSelect = (questionId, isScore) => {
    if (isScore) onIncrease();
    if (questionId === 11) {
      alert(score);
      moveToResult(score,navigate)
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
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Styled.Body>
      <Slider ref={(c) => setSlider(c)} {...settings}>
        {questions.map((question) => (
          <Styled.Contents key={question.id}>
            <Styled.QuestionWrapper>
              <Styled.QuestionNumber>{question.text}</Styled.QuestionNumber>
              <Styled.Question>{question.question}</Styled.Question>
            </Styled.QuestionWrapper>
            <Styled.BtnContainer>
              {question.options.map((option) => (
                <Fade bottom when={question.id === slideIndex}>
                  {/**fade를 한블럭 밖에 둬야하지 않나 */}
                  <Styled.Option
                    onClick={() =>
                      handleOptionSelect(question.id, option.score)
                    }
                  >
                    {/* Add onclick branch to last qustoin / extends map range */}
                    {option.text}
                  </Styled.Option>
                </Fade>
              ))}
            </Styled.BtnContainer>
          </Styled.Contents>
        ))}
      </Slider>
    </Styled.Body>
  );
};

export default Test;
