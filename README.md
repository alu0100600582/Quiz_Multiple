## Práctica: Quiz. Diseño Adaptativo, Despliegue en Heroku, Mejoras.

### Descripción de la Práctica

En esta práctica vamos a crear un Diseño Adaptativo para nuestra aplicación Quiz y también vamos a desplegar la aplicación en Heroku.

### Requisitos de la Práctica: Añada a la práctica anterior del Quiz

    - Diseño adaptativo

    - Despliegue en Heroku

    - Defina una clase o factoría Respuesta cuyo constructor/factoría admita como argumento:
          - Una función

          - Una expresión regular regexp (el constructor/factoría lo convierte internamente
            a formato función así: function(x) { return x.match(regexp);})

          - Una cadena string o un número number (el constructor/factoría lo convierte a
            formato función así:
            function(x) { return x === 'string'; } o bien function(x) { return x === number; })

    - Un objeto Respuesta es siempre una función que recibe un argumento con la respuesta
    escrita por el alumno y retorna true si y sólo si la respuesta es correcta.

    - Añada una clase Pregunta de la que heredan PreguntaCorta (que se representa en la vista
      mediante un input) y PreguntaLarga (que se representará mediante una textarea).

      {
        pregunta: new PreguntaCorta('¿En que año se  descubrió América?<br/>'),
        respuesta: new Respuesta(1492)
      },

    - Reescriba el cuestionario con la nueva sintáxis




---

Enlace a la Comunidad de la Asignatura: https://plus.google.com/u/1/communities/111920114018766363342?cfem=1

Mi GitHub page: http://alu0100600582.github.io/

Repositorio Github: https://github.com/alu0100600582/Heroku_Adaptativo

Despliegue en Heroku: http://quiz-sytw.herokuapp.com/
