import { useState, useEffect } from "react";
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
  border: none;
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
    width: 500px;
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
    text: "Q3.",
    question: "Estamos en el cuarto.\nQue estamos haciendo?",
    options: ["Netflix", "Hablando sobre un tema interesante"],
    selected: "",
  },
  {
    id: 4,
    text: "Q4.",
    question: "No me ha contestado \nLos mensajes por 3 horas!",
    options: [
      "Le llamo. necesito saber donde esta, y que esta haciendo!",
      "se me hace que esta muy ocupado/a, mejor hago mis cosas",
    ],
    selected: "",
  },
  {
    id: 5,
    text: "Q5.",
    question: "Ya andamos 3 meses junto\npero siempre me dice ‘te quiero’!",
    options: [
      "No me amas? por que no me dices te amo?",
      "No le digo nada. como quiera estoy segura que el me ama",
    ],
    selected: "",
  },
  {
    id: 6,
    text: "Q6.",
    question: "Voy a regalar algo a mi novio/a !!\nQue le vas a comprar?",
    options: [
      "algo muy bonito y que me recuerde con esto.",
      "algo que necesita ahorita",
    ],
    selected: "",
  },
  {
    id: 7,
    text: "Q7.",
    question: "Mi novio/a esta hablando\ncon otro/a por mensajes!",
    options: ["Quien es? Explicame ya!", "Entiendo que tiene sus amigos"],
    selected: "",
  },
  {
    id: 8,
    text: "Q8.",
    question:
      "peleamos muy fuerte. Y no me habla todo el dia!\nQue tipo de persona eres?",
    options: [
      "Nunca le voy a mandar mensaje hasta que me pida perdon",
      "Yo tambien tengo la culpa.. le hablo?",
    ],
    selected: "",
  },
  {
    id: 9,
    text: "Q9.",
    question: "Despues de pelear,\nEn que manera estamos hablando?",
    options: ["mensajes", "marca llamadas"],
    selected: "",
  },
  {
    id: 10,
    text: "Q10.",
    question: "Terminamos..",
    options: [
      "Borro todo las fotos y videos de el/ella",
      "No borro nada. Quien sabe que vamos a regresar!",
    ],
    selected: "",
  },
  {
    id: 11,
    text: "Q11.",
    question: "Mi ex me mando mensaje..?",
    options: ["quien eres?", "Le contesto despu￩s de 3 horas."],
    selected: "",
  },
];

const Test = () => {
  const navigate = useNavigate();
  const [slider, setSlider] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (slideIndex === 0) {
      setSlideIndex(1);
    }
  }, [slideIndex]);

  const handleOptionSelect = (questionId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: option,
    });
    if (questionId === 11) {
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
