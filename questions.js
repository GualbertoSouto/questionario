const mineraisG = {f: 0, i: 0, k: 0, s: 0, p: 0, al: 0, bi: 0, ba: 0, cr: 0, co: 0, 
                cu: 0, fe: 0, li: 0, mg: 0, mn: 0, ni: 0, se: 0, si: 0, zn: 0, 
                mnCu: 0, mnCo: 0, znCu: 0, cuAuAg: 0, znNiCo: 0};
                
const diatese = {dI: 0, dII: 0, dIII: 0, dIV: 0};
const sindromeD = {totSindD: 0};
const anamnese = {aI: 0, aII: 0, aIII: 0, aIV: 0};
const sindromeA = {totSindA: 0};
let totGeral = {totDAI: 0, totDAII: 0, totDAIII: 0, totDAIV: 0, totSIN: 0};

let questions = [
  {
    question: {
      id: "Geral",
      title: "Estado Geral - Diátese",
      content: "Como você se sente?",

      options: [
        {
          content: "Sua fadiga (Cansaço) é permanente?",
          diatese: "IV",
          minerais: "[cuAuAg]",
          estado: "Geral",
        },
        {
          content: "Já acorda já cansado(a), custa levantar?",
          diatese: "I",
          minerais:"[si]",
          estado: "Geral",
        },
        {
          content: "Seu cansaço vai aumentando progr. no decorrer do dia?",
          diatese: "II",
          minerais: "[mnCu]",
          estado: "Geral",
        },
        {
          content: "Seu cansaço é de manhã voltando ao fim da tarde?",
          diatese: "III",
          minerais: "[li]",
          estado: "Geral",
        },
        {
          content: "Sente quebras de energia (Antes ou após Almoço)?",
          sindrome: "S",
          minerais: "[li, znNiCo]", //obs idade acima dos 50 se é mulher
          estado: "Geral",
        },
      ],
    },
  },

  {
    question: {
      id: "Memoria",
      title: "Estado Memória - Diátese",
      content: "Memória (Como define sua memória?)",

      options: [
        {
          content: "Má memória episódica (ou seja, só de vez em quando)?",
          diatese: "I",
          minerais: "[si]",
          estado: "Memória",
        },
        {
          content: "Má memória acentuando progressivamente.(Você tem notado)?",
          diatese: "III",
          minerais: "[li]", //duvida
          estado: "Memória",
        },
        {
          content: "Memória com má concentração e confusão?",
          diatese: "IV",
          minerais: "[cuAuAg]",
          estado: "Memória",
        },
        {
          content: "Uma memória com má concentração episódica?",
          diatese: "I",
          minerais: "[si]",
          estado: "Memória",
        },
      ],
    },
  },

  {
    question: {
      id: "Natureza",
      title: "Estado Natureza - Diátese",
      content: "Natureza (Como se define)",

      options: [
        {
          content: "Você se sente uma pessoa muito enérgica?",
          diatese: "I",
          minerais: "[si]",
          estado: "Natureza",
        },
        {
          content: "Sente-se medianamente enérgica?",
          diatese: "II",
          minerais: "[mnCu]",
          estado: "Natureza",
        },
        {
          content: "Sente-se Sem energia?",
          diatese: "IV",
          minerais: "[cuAuAg]",
          estado: "Natureza",
        },
        {
          content: "Acha-se uma pessoa ótimista, encara as coisas de frente?",
          diatese: "I",
          minerais: "[si]",
          estado: "Natureza",
        },
        {
          content: "Indecisa, pensa muito, Tem momentos de pessimismo?",
          diatese: "III",
          minerais: "[li]",   //duvida
          estado: "Natureza",
        },
        {
          content: "Você tem momentos de pessimismo com depressão?",
          diatese: "IV",
          minerais: "[cuAuAg]",   //duvida
          estado: "Natureza",
        },
        {
          content: "Indiferente ao meio, desatenta por falta de atenção, dispersa?",
          diatese: "II",
          minerais: "[mnCu]",   //duvida
          estado: "Natureza",
        },
      ],
    },
  },

  {
    question: {
      id: "Sono",
      title: "Estado Sono - Diátese",
      content: "Sono (Como é seu sono?)",

      options: [
        {
          content: "Dorme bem, (Sem uso de medicamentos)?",
          diatese: "II",
          minerais: "[s, mn, si, mnCu]",   //enxofre e Maganês
          estado: "Sono",
        },
        {
          content: "Dormiria mais horas se pudesse?",
          diatese: "I",
          minerais: "[s, mn]",   
          estado: "Sono",
        },
        {
          content: "Dorme mau com ansiedade, sono agitado (bruxismo), fala muito a noite?",
          diatese: "III",
          minerais: "[s, mn, se, mnCo, si]",   //enxofre e manganês //Selenio manganês/cobalto
          estado: "Sono",
        },
        {
          content: "Dorme mau com pesadelos?",
          diatese: "IV",
          minerais: "[s, mn, si, cuAuAg]",
          estado: "Sono",
        },
        {
          content: "Desperta durante a noite, durante o sono, para ir ao banheiro?",
          diatese: "III",
          minerais: "[si, se, mnCo]", 
          estado: "Sono",
        },
        {
          content: "Sonolência durante o dia, fica bocejando, olhos ardendo, fica pescando?",
          sindrome: "S",
          minerais: "[si, znNiCo]", //zinco, niquel e cobalto 
          estado: "Sono",
        },
      ],
    },
  },

  {
    question: {
      id: "Temperamento",
      title: "Estado Temperamento - Diátese",
      content: "Seu temperamento, Como definiria?",

      options: [
        {
          content: "Calmo, ponderado, indiferente?",
          diatese: "II",
          minerais: "[mnCu]",  //enxofre e manganês
          estado: "Temperamento",
        },
        {
          content: "Nervoso, colérico, impulsivo?",
          diatese: "I",
          minerais: "[si]", //enxofre e manganês
          estado: "Temperamento",
        },
        {
          content: "Você é nervoso com ansiedade?",
          diatese: "III",
          minerais: "[se, mnCo]",  //selenio manganês cobalto
          estado: "Temperamento",
        },
        {
          content: "Tem se sentido apático, confuso, sem um norte na vida?",
          diatese: "IV",
          minerais: "[cuAuAg]",  //cobre ouro e prata
          estado: "Temperamento",
        },
        {
          content: "Sofre alternância de temperamento de humor, sem motivo aparente?",
          sindrome: "S",
          minerais: "[znNiCo]", //zinco, niquel e cobalto 
          estado: "Temperamento",
        },
      ],
    },
  },

  {
    question: {
      id: "Observações",
      title: "Observações - Diátese",
      content: "Como são suas micções?",

      options: [
        {
          content: "Micção dolorosa?",
          
        },
        {
          content: "Infecção crônica ou aguda?",
          
        },
        {
          content: "Incontinência?",
          
        },
      ],
    },
  },

  {
    question: {
      id: "Observações2",
      title: "Observações - Diátese",
      content: "Você tem alguma dessas patologias?",

      options: [
        {
          content: "Artrose?",
          
        },
        {
          content: "Gota?",
          
        },
        {
          content: "Ciática",
          
        },
        {
          content: "Artrite reumatóide",
          
        },
      ],
    },
  },

  {
    question: {
      id: "Observações3",
      title: "Observações - Diátese",
      content: "Você esta gravida?",

      options: [
        {
          content: "Sim?",
          
        },
        {
          content: "Não?",
          
        },
      ],
    },
  },

  {
    question: {
      id: "Observações4",
      title: "Observações - Diátese",
      content: "Você toma algum medicamento?",

    options: [
        {
          content: "Sim?",
          
        },
        {
          content: "Não?",
          
        },
      ],
    },
  },

  {
    question: {
      id: "Pâncreas",
      title: "Có-Relações Pâncreas - Anâmnese",
      content: "Pâncreas (Anâmnese)",

      options: [
        {
          content: "Você Tem dores de cabeça freqüentes?",
          anamnese: "I",
          minerais: "[si]",  //silicio
          estado: "Pâncreas",

        },
        {
          content: "Essas dores de cabeça são acompanhadas de vômitos, náuseas?",
          anamnese: "II",
          minerais: "[mnCu]",  //manganes cobre
          estado: "Pâncreas",
        },
        {
          content: "Tem problemas de vista, imagens turvas ,fotofobia, lacrimejamento, uveíte?",
          anamnese: "III",
          minerais: "[se, mnCo]",  //selênio manganes cobalto
          estado: "Pâncreas",
        },
        {
          content: "Você ouve zumbidos?",
          anamnese: "III", 
          minerais: "[se, mnCo]",  //selênio manganes cobalto
          estado: "Pâncreas",
        },
        {
          content: "Você sente tonturas?",
          anamnese: "I II", //obs
          sindrome: "S",
          minerais: "[mnCu, se, mnCo, i]",  //Iodo
          estado: "Pâncreas",
        },
        {
          content: "Você fica resfriado com frequência?",
          anamnese: "II",  //obs
          minerais: "[mnCu, cu]", //cobre 
          estado: "Pâncreas",
        },
        {
          content: "Você tem algum problema respiratório? ",
          anamnese: "II",  
          minerais: "[mnCu, cu]", 
          estado: "Pâncreas",
        },
      ],
    },
  },

  {
    question: {
      id: "Digestório",
      title: "Có-relação Digestório - Anâmnese",
      content: "Sistema Digestório (Anâmnese)",

      options: [
        {
          content: "Você Tem pouco apetite?",
          anamnese: "II",  //obs
          minerais: "[mnCu]",  //manganes cobalto
          estado: "Digestório",
        },
        {
          content: "Você tem prisão de ventre?",
          anamnese: "III",  //obs
          sindrome: "S",
          minerais: "[se, mnCo, i]",  //Iodo
          estado: "Digestório",
        },
        {
          content: "Digestão dificil (Dispepsia, Acidez, Estufamento, Peso, Excesso de arroto)?",
          anamnese: "III",  //obs
          sindrome: "S",
          minerais: "[se, mnCo, znNiCo]",  //zinco niquel cobalto
          estado: "Digestório",
        },
        {
          content: "Você tem gases?",
          anamnese: "III",  //obs
          sindrome: "S",
          minerais: "[se, mnCo, znNiCo]",  //zinco niquel cobalto
          estado: "Digestório",
        },
        {
          content: "Dificuldade ao urinar, vai pouco ao banheiro, pouco volume, sai pingando, muito ardida?",
          anamnese: "II III IV",  //obs
          minerais: "[mnCu, se, mnCo, cuAuAg]",
          estado: "Digestório",
        },
        {
          content: "Quantas vezes urina ao dia, Entre 5 e 8 vezes? (Normal)",
          minerais: "[]",
        },
        {
          content: "Quantas vezes urina ao dia, Mais de 8 vezes? (Mg)? ",
          minerais: "[mg]", //magnesio
        },
        {
          content: "Quantas vezes urina ao dia, Menos de 5 vezes? (Se)? ",
          minerais: "[se]", //selênio,
        },
      ],
    },
  },

  {
    question: {
      id: "Circulatório",
      title: "Sistema Circulatório - Anâmnese",
      content: "Você tem problemas de Pressão arterial?",

      options: [
        {
          content: "Hipertensão?",
          anamnese: "I II III IV",  //obs
          sindrome: "S",
          minerais: "[si, mnCu, se, mnCo, cuAuAg, i]",
          estado: "Circulatório",
        },
        {
          content: "Hipotensão?",
          anamnese: "I II III IV",  //obs
          sindrome: "S",
          minerais: "[mnCu, se, mnCo, cuAuAg, i]",
          estado: "Circulatório",
        },
        {
          content: "Você tem varizes?",
          anamnese: "III", 
          sindrome: "S",
          minerais: "[s, se, mnCo, i]", 
          estado: "Circulatório",
        },
        {
          content: "As pernas ou tornozelos incham?",
          anamnese: "III", 
          minerais: "[se, mnCo]", //selenio manganes cobalto
          estado: "Circulatório",
        },
        {
          content: "Costuma ter cãibras?",
          anamnese: "III", 
          minerais: "[se, mnCo]", //selenio manganes cobalto
          estado: "Circulatório",
        },
        {
          content: "Pés e mãos geralmente são frios?",
          anamnese: "III", 
          minerais: "[se, mnCo]", //selenio manganes cobalto
          estado: "Circulatório",
        },
        {
          content: "Precisa urinar durante a noite, Se levantar para urinar?",
          anamnese: "III", 
          minerais: "[se, mnCo]", //selenio manganes cobalto
          estado: "Circulatório",
        },
      ],
    },
  },

  {
    question: {
      id: "Hormônal Feminino",
      title: "Hormônal Feminino (Anâmnese)",
      content: "Sua Menstruação?",

      options: [
        {
          content: "Suas menstruações são fortes, dolorosas?",
          anamnese: "I", 
          minerais: "[si]",  //silicio
          estado: "Hormônal",
        },
        {
          content: "São espaçadas e fracas, fluxo médio ou baixo?",
          anamnese: "II", 
          minerais: "[mnCu]", //manganes cobre
          estado: "Hormônal",
        },
        {
          content: "São irregulares?",
          anamnese: "III", 
          minerais: "[se, mnCo]", //selenio manganes cobalto
          estado: "Hormônal",
        },
        {
          content: "Ausentes? (No caso de amenorréia)",
          anamnese: "IV", 
          minerais: "[cuAuAg]", //cobre ouro prata
          estado: "Hormônal",
        },
        {
          content: "Tem perturbações de menopausa fogachos, calorões?",
          anamnese: "III", 
          minerais: "[se, mnCo]", //selenio manganes cobalto
          estado: "Hormônal",
        },
        {
          content: "Tem problemas de esterilidade, Teve problemas para engravidar?",
          anamnese: "I", 
          sindrome: "S",
          minerais: "[si, znCu]", //zindo cobre 
          estado: "Hormônal",
        },
      ],
    },
  },

  {
    question: {
      id: "Hormônal Masculino",
      title: "Hormônal Masculino (Anâmnese)",
      content: "Hormônal Masculino",

      options: [
        {
          content: "Tem problemas de próstata?",
          anamnese: "III", 
          minerais: "[se, mnCo]", //zinco niquel cobalto
          estado: "Hormônal",
        },
        {
          content: "Tem problemas de esterilidade/impotência?",
          anamnese: "I",
          sindrome: "S",
          minerais: "[znCu]", //zinco cobre
          estado: "Hormônal",
        },
      ],
    },
  },

  {
    question: {
      id: "Linfático",
      title: "Sistema Linfático (Anâmnese)",
      content: "Sistema Linfático",

      options: [
        {
          content: "Tem dores nas articulações?",
          minerais: "[mg]", //magnesio
          estado: "Linfático",
        },
        {
          content: "Sofre problemas de pele psoríase, urticaria, irritação, alergia na pele, eczema?",
          anamnese: "II III",
          sindrome: "S",
          minerais: "[s, mnCu, se, mnCo]",  
          estado: "Linfático",
        },
        {
          content: "Sofre de acne?",
          anamnese: "II III IV",
          sindrome: "S",
          minerais: "[mnCu, se, mnCo, znCu, cuAuAg]",
          estado: "Linfático",
        },
        {
          content: "Tem alergias de contato, uso de bijuteria, com detergentes, em contato com a pele?",
          anamnese: "I II",
          minerais: "[si, mnCu]", //maganes cobre
          estado: "Linfático",
        },
        {
          content: "As unhas são frágeis?",
          anamnese: "III",
          sindrome: "S",
          minerais: "[se, mnCo, znCu]",
          estado: "Linfático",
        },
        {
          content: "Tem queda de cabelo?",
          anamnese: "III",
          sindrome: "S",
          minerais: "[se, mnCo, znCu]",  //zinco cobre
          estado: "Linfático",
        },
      ],
    },
  },
];