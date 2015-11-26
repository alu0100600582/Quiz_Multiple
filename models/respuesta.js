function Respuesta(respuesta){



  if(typeof(this.respuesta) === 'string' || typeof(this.respuesta) === 'number') {
    return function(x){return x === respuesta;};
  }

  else if(respuesta instanceof RegExp){
    return function(x){return x.match(respuesta);};
  }

  else if(respuesta instanceof Array){
     return function(x){
       if(respuesta.length != x.length) return false;

       var objeto = true;

       for(var i=0; i<respuesta.length; i++){
         if(respuesta[i] != x[i]) objeto = false;
       }

       return objeto;
     };
   }

   else {
     return respuesta;
   }

}


module.exports = Respuesta;
