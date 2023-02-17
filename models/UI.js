export class UI {
    constructor() { }

    /**
     * 
     * @param {string} text text
     */

    showPregunta(text) {
        const preguntaTitulo = document.getElementById("pregunta")
        preguntaTitulo.innerText = text;
    }
  
    /**
     * 
     * @param {string[]} opciones 
    
     */

    showOpciones(opciones, callback) {
        const opcionesContenedor = document.getElementById("opciones");
        opcionesContenedor.innerHTML = ''

        for (let i = 0; i < opciones.length; i++) {
            const button = document.createElement("button");
            button.addEventListener("click", () => callback(opciones[i]));
            button.className = "button";
            button.innerText = opciones[i];


            opcionesContenedor.append(button);
        }
    }

    /**
     * @param {number} score el total del puntaje
     */


    showScores(score) {

        const quizEndHTML = `
<div id="quiz">
    <div class="encabezado">
       <h2 class="hashtag">#Sistema<strong>CORE</strong></h2>
    </div>
    <div class="vamos" id="titulo">
            <h1 class="enunciado">Vamos a poner a prueba tus conocimientos
                sobre el aplicativo Alistamiento de Proyectos</h1>
    </div>
    <div id="contenedor">
    <h1 id="score"> Tu Puntaje es: ${score} </h2>
    <div id="mensaje">Conoce más sobre el aplicativo del <strong>SISTEMA CORE</strong>, <br> <strong>Alistamiento de Proyecto</strong></div>
    <a id="aplicativo" href="https://apps.powerapps.com/play/e/default-cb226876-cbb5-4d26-999f-3218c9679838/a/c8ff6b2d-58fd-47be-a5c2-c23ca610045e?tenantId=cb226876-cbb5-4d26-999f-3218c9679838">Ingresa aquí</a>
    </div>
    <footer class="logos">
    <img class="footer" src="../img/logos.png" alt="logos Socya y CCO Systems">
    </footer>
</div>
    `;

        const element = document.getElementById("quiz");
        element.innerHTML = quizEndHTML;


    }
}




