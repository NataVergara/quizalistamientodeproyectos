//@ts-check

import { Quiz } from "./models/Quiz.js"

import {UI} from "./models/UI.js"

import { preguntas } from "./data/preguntas.js";

/**
 * 
 * @param {Quiz} quiz el main quiz object
 * @param {UI} ui  ui object
 */

const renderPage = (quiz, ui) =>{

    if(quiz.isEnded()) {
        ui.showScores(quiz.score);
        

    } else {
        console.log(quiz);
        ui.showPregunta(quiz.getPreguntasIndex().text);
    ui.showOpciones(quiz.getPreguntasIndex().opciones, (currenOpciones) => { quiz.adivinar(currenOpciones)
    renderPage(quiz, ui);
});
    }
    
    

};

function main(){
    const quiz = new Quiz(preguntas);
    const ui = new UI();

    renderPage(quiz, ui);
   
    }

main();