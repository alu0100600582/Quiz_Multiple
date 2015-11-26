"use stric";

var Pregunta = require('../models/pregunta.js');


function PreguntaCorta(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = "<input type='text' name='respuesta'>";
}

module.exports = PreguntaCorta;
