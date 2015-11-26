"use stric";

var Pregunta = require('../models/pregunta.js');

function PreguntaSimple(enunciado, ListaRespuestas){
  Pregunta.call(this,enunciado);
  this.ListaRespuestas = ListaRespuestas;
  this.entrada = "<select name='respuesta'>";

}

module.exports = PreguntaSimple;
