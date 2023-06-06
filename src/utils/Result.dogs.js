const dogs = {
    err : {
        temp: "err",
        name: "Error has occured",
        text: "Please try again."
    },
    welsh: {
        temp: "welsh",
        name: "Welsh Corgi",
        text: "- Soy muy relajada, y tomo suficiente tiempo antes de decidir.\n\n- Es muy importante tener La Paz. No me gusta tener problemas!\n\n- Soy muy independencia, necesito que respetes mi tiempo a solas."
    },
    poodle: {
        temp: "poodle",
        name: "Poodle",
        text: "-Debes expresar tu gratitud hacia mi por cuidar de ti.\n\n-Para mí, necesitas empatizar emocionalmente en lugar de dar consejos.\n\n-No me gusta que no lo hagamos como hemos planeado antes. El plan es importante!"
    },
    maltese: {
        temp: "maltese",
        name: "Maltese",
        text: "-Soy muy independiente, necesito que respetes mi tiempo a solas.\n\n-Me gustan las conversaciones y discusiones sobre mis intereses, así que tienes que escucharme poner atención\n\n-Por favor, no hagas comentarios ignorantes o groseras cuando hables conmigo."
    },
    pome: {
        temp: "pome",
        name: "Pomeranian",
        text: "-Soy muy directo. Espero que me entiendas!\n\n-¡Me gusta probar cosas que nunca antes había probado!\n\n-Las personas que se me acercan demasiado emocionalmente son una carga y una molestia."
    },
    bichon: {
        temp: "bichon",
        name: "Bichon",
        text: "-Tengo una personalidad relajada y tranquila, así que aunque sea un poco lento, debes entender\n\n-Me gusta relajarme en casa, por eso lo paso mal con demasiadas citas.\n\n-Tengo un fuerte sentido de independencia, por lo que necesito respetar mi tiempo a solas."
    },
    yorkie: {
        temp: "yorkie",
        name: "Yorkshire Terrier",
        text: "-Soy muy directo. Espero que me entiendas! \n\n\n-Es tan difícil y agobiante tratar conmigo emocionalmente \n\n\n-No me gusta la gente que miente, así que necesito que seas honestos conmigo"
    },
    dacs: {
        temp: "dacs",
        name: "Dachshund",
        text: "-No me gusta pelear demasiado, pero si lo haces, no pierdo. así que ten cuidado.\n\n-Enséñame muchas cosas!\n\n-Es muy inconveniente para mí inventar una historia que solo yo no sé."
    }
}

export const dogOptions = {
    0: dogs.err,
    1: dogs.welsh, // error page로 바로 날려야할듯?
    2: dogs.welsh,
    3: dogs.welsh,
    4: dogs.poodle,
    5: dogs.maltese,
    6: dogs.pome,
    7: dogs.bichon,
    8: dogs.yorkie,
    9: dogs.dacs
};