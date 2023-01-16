
class Preguntas {

    /**
     * 
     * @param {string} text esto es un texto para pregunta
     * @param {string[]} opciones estos son las ociones de la pregunta 
     * @param {string} respuesta esta es la respuesta de la pregunta 
     */

    constructor(text, opciones, respuesta) {
        this.text = text;
        this.opciones = opciones;
        this.respuesta = respuesta;
        

    }

    /**
     * 
     * @param {string} opciones algunos textos para adivinar
     * @returns {boolean} return si la respuesta es correcta
     */

    correctRespuesta(opcion) {
        return opcion === this.respuesta;

    }

}

export { Preguntas };




