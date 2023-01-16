import {Preguntas} from "../models/Preguntas.js";
import {data} from "./data.js";

 export const preguntas = data.map((pregunta) => new Preguntas(pregunta.pregunta, pregunta.opciones, pregunta.respuesta));

