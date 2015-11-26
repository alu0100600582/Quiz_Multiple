
"use stric";

var Pregunta = require('../models/pregunta.js');

function PreguntaMultiple(enunciado, ListaRespuestas){
  Pregunta.call(this,enunciado);
  this.ListaRespuestas = ListaRespuestas;
  this.entrada = "<select name='respuesta[]' multiple>" ;
}

module.exports = PreguntaMultiple;
