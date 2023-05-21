export const questions = [
    // 객체 안에 필드를 추가해서 득점 로직을 짜거나, options 배열 안의 elements를 객체로 바꿔서 짜거나
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