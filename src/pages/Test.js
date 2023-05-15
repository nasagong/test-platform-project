import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increase, initialize } from "../state/module/score";

const Option = styled.button`
  @media (max-width: 414px) {
    width: 412px;
    margin-left: auto;
    margin-right: auto;
  }
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

const Contents = styled.div`
  margin-top: 4rem;
`;
const QuestionWrapper = styled.div`
  margin: 0 2rem;
  text-aligin: left;
`;
const QuestionNumber = styled.h1`
  text-align: left;
  color: #bd597a;
`;

const Question = styled.div`
  font-weight: bold;
  margin: 2rem auto 0rem auto;
  font-size: 2rem;
`;

const BtnContainer = styled.div`
  margin-top: 5rem;
`;
const Body = styled.div`
  //너비 반응형으로 해야
  @media (max-width: 412x) {
    width: 500px;
  }
  @media (max-width: 320x) {
    overflow-y: scroll;
  }
  width: 32rem;
  height: 100vh;
  margin: auto auto;
`;

const questions = [
  // 객체 안에 필드를 추가해서 득점 로직을 짜거나, options 배열 안의 elements를 객체로 바꿔서 짜거나.. 후자가 나을듯
  {
    id: 1,
    text: "Q1.",
    question: "primer cita!\ncomo me voy a vestir?",
    options: [
      { text: "Ya tengo mi outfit perfecto", score: true },
      { text: "Antes de salir, voy a elegir.", score: false },
    ],
    selected: "",
  },
  {
    id: 2,
    text: "Q2.",
    question: "mi novio/a quiere salira una fiesta!",
    options: [
      { text: "quien te dio el permiso? quedate en tu casa!", score: true },
      {
        text: "divertete, pero no olvides de avisarme cuando llegues a tu casa!",
        score: false,
      },
    ],
    selected: "",
  },
  {
    id: 3,
    text: "Q3.",
    question: "Estamos en el cuarto.\nQue estamos haciendo?",
    options: [
      { text: "Netflix", score: false },
      { text: "Hablando sobre un tema interesante", score: false },
    ],
    selected: "",
  },
  {
    id: 4,
    text: "Q4.",
    question: "No me ha contestado \nLos mensajes por 3 horas!",
    options: [
      {
        text: "Le llamo. necesito saber donde esta, y que esta haciendo!",
        score: true,
      },
      {
        text: "se me hace que esta muy ocupado/a, mejor hago mis cosas",
        score: false,
      },
    ],
    selected: "",
  },
  {
    id: 5,
    text: "Q5.",
    question: "Ya andamos 3 meses junto\npero siempre me dice ‘te quiero’!",
    options: [
      { text: "No me amas? por que no me dices te amo?", score: true },
      {
        text: "No le digo nada. como quiera estoy segura que el me ama",
        score: false,
      },
    ],
    selected: "",
  },
  {
    id: 6,
    text: "Q6.",
    question: "Voy a regalar algo a mi novio/a !!\nQue le vas a comprar?",
    options: [
      { text: "algo muy bonito y que me recuerde con esto.", score: false },
      { text: "algo que necesita ahorita", score: false },
    ],
    selected: "",
  },
  {
    id: 7,
    text: "Q7.",
    question: "Mi novio/a esta hablando\ncon otro/a por mensajes!",
    options: [
      { text: "Quien es? Explicame ya!", score: true },
      { text: "Entiendo que tiene sus amigos", score: false },
    ],
    selected: "",
  },
  {
    id: 8,
    text: "Q8.",
    question:
      "peleamos muy fuerte. Y no me habla todo el dia!\nQue tipo de persona eres?",
    options: [
      {
        text: "Nunca le voy a mandar mensaje hasta que me pida perdon",
        score: true,
      },
      { text: "Yo tambien tengo la culpa.. le hablo?", score: false },
    ],
    selected: "",
  },
  {
    id: 9,
    text: "Q9.",
    question: "Despues de pelear,\nEn que manera estamos hablando?",
    options: [
      { text: "mensajes", score: false },
      { text: "marca llamadas", score: false },
    ],
    selected: "",
  },
  {
    id: 10,
    text: "Q10.",
    question: "Terminamos..",
    options: [
      { text: "Borro todo las fotos y videos de el/ella", score: true },
      { text: "No borro nada. Quien sabe que vamos a regresar!", score: false },
    ],
    selected: "",
  },
  {
    id: 11,
    text: "Q11.",
    question: "Mi ex me mando mensaje..?",
    options: [
      { text: "quien eres?", score: true },
      { text: "Le contesto despus de 3 horas.", score: false },
    ],
    selected: "",
  },
];

const Test = () => {
  useEffect(() => {
    dispatch(initialize());
  },[]);
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
      navigate("/loading");
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
            <QuestionWrapper>
              <QuestionNumber>{question.text}</QuestionNumber>
              <Question>{question.question}</Question>
            </QuestionWrapper>
            <BtnContainer>
              {question.options.map((option) => (
                <Fade bottom when={question.id === slideIndex}>
                  {" "}
                  {/**fade를 한블럭 밖에 둬야하지 않나 */}
                  <Option
                    onClick={() =>
                      handleOptionSelect(question.id, option.score)
                    }
                  >
                    {/* Add onclick branch to last qustoin / extends map range */}
                    {option.text}
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
