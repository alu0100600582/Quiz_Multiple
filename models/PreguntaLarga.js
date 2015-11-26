"use stric";

var Pregunta = require('../models/pregunta.js');

function PreguntaLarga(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = "<textarea name='respuesta' rows='2' cols='50'></textarea>";
}

module.exports = PreguntaLarga;
