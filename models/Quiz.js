
//@ts-check

import {Preguntas} from "../models/Preguntas.js";

export class Quiz {


    preguntasIndex = 0;
    score = 0;

    /**
     * 
     * @param {Preguntas[]} preguntas 
     */

    constructor(preguntas){
        this.preguntas = preguntas;
        
        
    }


/**
 * 
 * @returns {Preguntas} pregunta encontrada
 */
    getPreguntasIndex(){
        return this.preguntas[this.preguntasIndex];
    }

    isEnded(){
        return this.preguntas.length === this.preguntasIndex;
    }

    /**
     * 
     * @param {string} respuesta algun texto
     */

    adivinar(respuesta){

        if (this.getPreguntasIndex().correctRespuesta(respuesta)) {
            this.score++;
        }


        this.preguntasIndex++;
    }
}