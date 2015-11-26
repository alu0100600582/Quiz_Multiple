"use stric";

function Respuesta(respuesta){
  this.respuesta = respuesta;


  if(typeof(this.respuesta) === 'string' || typeof(this.respuesta) === 'number') {
    return function(x){return x === respuesta;};
  }
  else if (this.respuesta.__proto__.toString() === '/(?:)/') {
    return function(x){return x.match(respuesta);};
  }
  else if (this.respuesta.__proto__.toString() === "function () {}") {
    return respuesta;
  }
}


module.exports = Respuesta;
