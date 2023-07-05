//console.log(questions.length);

let currentQuestion = 0;

showQuestion();

function showQuestion() {
  if (questions[currentQuestion]) {

  let q = questions[currentQuestion];

 // console.log(q.question.content);
 //document.querySelector('.questoes').style.display = 'block';
 document.querySelector('.titulo').innerHTML = q.question.title;
 document.querySelector('.question').innerHTML = q.question.content;
 //document.querySelector('.options').innerHTML = "";

 let arrayOption = Object.entries(q.question.options);
 //console.log(arrayOption)
 //console.log(q.question.options);
 let optionsHtml = '';
   for(let i in arrayOption) {
      optionsHtml += `<div data-op="${i}" class="option"> <span>${parseInt(i)+1}</span> ${arrayOption[i][1].content} </div><br>`;

      
    };

document.querySelector('.options').innerHTML = optionsHtml;

  document.querySelectorAll('.options .option').forEach(item => {
    item.addEventListener('click', optionClickEvent);
       

  });

/* document.querySelectorAll('.options .option').forEach(item => {
  item.addEventListener('click', optionClickEvent);

  });*/




  // ////////////
// const minerais = {f: 0, i: 0, k: 0, s: 0, p: 0, al: 0, bi: 0, ba: 0, cr: 0, co: 0}
// function increaseMineral(e){
 //  const element = e.target.minerais //a resposta teria que ter a prop name                                         descrita com o valor                                    do mineral
 //  console.log(e.target);
  //  minerais[element]++
// }  
//console.log(mineraisG);

} else {

//fim das questões

}

};

function back() {
  console.log('clicou');
  currentQuestion--;
  showQuestion();
};

let botaoBack = document.querySelector('.btn-back');
botaoBack.addEventListener("click", () => {
  back();
});


function next() {
  console.log('clicou');
  currentQuestion++;
  showQuestion();
};

let botaoNext = document.querySelector('.btn-next');
botaoNext.addEventListener("click", () => {
  next();
});

/*let selecionadas = [];

function optionClickEvent(e) {
    let id = e.target.getAttribute("data-op")
    e.target.classList.toggle("sele");
    console.log("clicou em", id);
    
    let question = selecionadas.find(e => e.id == q.question.id);
    if(question) {
        question['options'].push(q.question.options[id]);
        selecionadas = [...selecionadas, question]
    } else {
        selecionadas.push({...q.question, options: [ q.question.options[id] ]})
    }

    e.target.classList.toggle("sele");
    console.log("clicou em", `${arrayOption[i][id]}`);
    console.log("clicou em", `optionsHtml.minerais`);
}
*/


 function optionClickEvent(e) {
 console.log("clicou em", e.target.getAttribute('data-op'));
 e.target.classList.toggle("sele");
 const selecionada = `${arrayOption[i][1].minerais}`;
 console.log(selecionada);

 //console.log("clicou em", `selecionada`);
 //selecionadas = [];
 //console.log("clicou em", `${arrayOption[i][1].minerais}`);
 //console.log("clicou em", `optionsHtml`);
 
 //console.log(`${arrayOption[i][1].minerais}`);
 
 

 
 };



//console.log(opcao)
//let optionHtml = '';
//for(let i in opcao) {
  // document.querySelector('.options').innerHTML += `<div>${opcao[i]}</div>`;
 //}
  //optionHtml += `<div class="option">${opcao} </div><br>`;

//}

//document.querySelector('.options').innerHTML = optionHtml;










/*
/* /////////////////////////////////////////////
////////////////////////////////

/////////////////////////////////////////////////////////////////////////
// import { useState } from 'react'

 const Test = () => {
   const [minerals, setMinerals] = mineraisG

   const updateMinerals = (keys) => () => {
   const mineral = keys.split(',')
   const updateData = {}
      for (const each of mineral) {
      updateData[each] = minerals[each] + 1
     }
     setMinerals({ ...minerals, ...updateData })

     console.log(setMinerals);
     }

     console.log(setMinerals);
  }
//   return (
//     <div className='text-black'>
//       <pre>
//         {JSON.stringify(minerals)}
//       </pre>
//       <div className='py-4 flex gap-4 text-white'>
//         <button
//           onClick={updateMinerals('f,i,k')}
//           className='px-2 bg-gray-400 rounded'
//         >
//           Option f,i,k
//         </button>
//         <button
//           onClick={updateMinerals('bi,k,f,co')}
//           className='px-2 bg-gray-400 rounded'
//         >
//           Option bi,k,f,co
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Test




////////////////////////////////////////////////////////////////////////////


//OUTRA FORMA
//  document.querySelector('.btn-next').addEventListener("click", () => {
//  next();
//  });


 //console.log(q);

//  document.body
//  .addEventListener('click', function(event) {
//    const elemento = event.target;
//    if(elemento.classList.contains("btn-next")){
       

  //  q.question++
  //  console.log(elemento);
  //  console.log(q);
  //  console.log(currentQuestion);
  //  console.log('Fazer alguma coisa');
    
    
        
//    };

//    ++currentQuestion;

//    showQuestion();
//   //  if(elemento.classList.contains("btn-back")){
//   //    console.log('Desfaça alguma coisa')
   
//   //   // currentQuestion--;
//   //   // showQuestion();

//   //  };
//  });





*/
//////////////////////////////////////////////////////
//codogo ok
/* //console.log(q.question.options);
for(let val of q.question.options) {
  //console.log(val.content);
  document.querySelector('.options').innerHTML += `<div>${ val.content }</div><br> `;

};
*/

/*
forma correta  para melhor perfomace e menor memoria   ok

/* let arrayOption = Object.entries(q.question.options);
 //console.log(arrayOption)
 //console.log(q.question.options);
 let optionsHtml = '';
   for(let i in arrayOption) {
      optionsHtml += `<div>${arrayOption[i][1].content}</div><br>`;

    };

document.querySelector('.options').innerHTML += optionsHtml;
*/
/*
function showQuestion() {
  if (questions[currentQuestion]) {

  let q = questions[currentQuestion];

 // console.log(q.question.content);
 //document.querySelector('.questoes').style.display = 'block';
 document.querySelector('.titulo').innerHTML = q.question.title;
 document.querySelector('.question').innerHTML = q.question.content;
// document.querySelector('.opitions').innerHTML = "";

 const arrayOption = Object.entries(q.question.options);
 //console.log(arrayOption)
 //console.log(q.question.options);
 for(let i in arrayOption) {
 console.log(i);
 document.querySelector('.options').innerHTML += `<div>${arrayOption[i][1].content}</div><br>`;

};


*/






















//let currentQuestion = 0;
//console.log(questions.currentQuestion);
//console.log(questions.options);
//console.log(currentQuestion);




//group: {
//  id: "group-a",
//  title: 
//let { content, options} = questions;

//console.log(content, options);

/*
let questao = questions.find(function(item){
  return (item.content)
});
 let res = questao;
 console.log(res);
*/
  
///showQuestion()  

///function showQuestion() {
 //for (question of question) {
   // console.log(question)
  //  }
 // (Object.values(questions[i]));
 /*const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
 
 if(questions[currentQuestion].content){
   let q = (questions[currentQuestion]);

  console.log(q.content);
  
  document.querySelector('.quiz').style.display = 'block';
  document.querySelector('.question').innerHTML = q.content;

  document.querySelector('.options').innerHTML = '';

   
  
  for(let val of q.options){
    console.log(val.content);


    



    document.querySelector('.options').innerHTML += val.content;






   };
*/
/*
  for(let val of Object.entries(q.options.content)){
      console.log(val);
     document.querySelector('.options').innerHTML = `<div>${val.content}<div>`;
    };
    //document.querySelector('.options').innerHTML = `${val}`;
  /*  
    altere seu for para iterar dentro da prop options,
    + ou - assim: for (let val of questions[0].options)
    e depois na atribuição coloque: ${val.content}
*/







//  document.querySelector('.options').innerHTML = q.options;
/*********************
  for(let i in q.options) {
     document.querySelector('.options').innerHTML += `<div>${q.options[i]}</div>`;
     console.log(q.options[i]);
  // }
  for(levar [key, value] of Object.entries(questions)){
  //  console.log(key + "-" + value);

  };

 // for(let i in q.options) {
   // document.querySelector('.options').innerHTML += `<div>Object.entries[i]</div>`;
 // }

  ///console.log(questions[currentQuestion].content);
  //console.log(q.question);


} else {

  //acabaramam as questões
};

*/
//};


/*
*/
/*/const QuizOption = {
  render(option) {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");

    label.classList.add("option");
    input.type = "checkbox";
    input.checked = option.selected;
    span.innerHTML = option.content;

    input.addEventListener("change", () => {
      option.selected = input.checked;
    });

    label.append(input, span);
    li.append(label);
    return li;
  },
};

const quiz = {
  groupTitle: document.querySelector(".quiz .group"),
  subgroup: document.querySelector(".quiz .subgroup"),
  questionContent: document.querySelector(".quiz .question"),
  options: document.querySelector(".quiz .options"),
  scoreContent: document.querySelector(".quiz .score"),
  backButton: document.querySelector(".quiz .back"),
  nextButton: document.querySelector(".quiz .next"),

  currentQuestion: 0,
 
  /*
  get score() {
    return this.questions.reduce((total, question) => {
      return (
        total +
        question.options
          .filter((option) => option.selected)
          .reduce((score, { value }) => score + value, 0)
      );
    }, 0);
  },

  next() {
    this.currentQuestion = Math.min(
      this.currentQuestion + 1,
      this.questions.length - 1
    );
  },
  back() {
    this.currentQuestion = Math.max(this.currentQuestion - 1, 0);
  },


  */
  /*render() {
    const question = this.questions[this.currentQuestion];

    this.groupTitle.innerHTML = question.group.title;
    this.questionContent.innerHTML = question.content;
    this.scoreContent.innerHTML = this.score;
    this.options.innerHTML = "";
    this.options.append(...question.options.map(QuizOption.render));
  },
  init() {
    this.nextButton.addEventListener("click", () => {
      this.next();
      this.render();
    });

    this.backButton.addEventListener("click", () => {
      this.back();
      this.render();
    });

    this.render();
  },
};
quiz.init();*/
