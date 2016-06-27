// Envolvemos el componente AngularJS en una IIFE, para eliminar las variables del scope global
(function($) {

    // Usamos modo estricto (nuevo in ECMA5): http://www.w3schools.com/js/js_strict.asp
    'use strict';

    // Creamos un nuevo vector, usando el módulo vector, que se encuentra en vector.js
    var v1 = new vector(1, 5);
    var v2 = new vector(7, -2);

    // Esperamos 3 segundos y mostramos la información en el div que guarda el contenido
    var vSuma = v1.plus(v2);
    setTimeout(function() {
        $("#content").text("v(1,5) + v(7, -2) = v(" + vSuma.x + ", " + vSuma.y + ")");
    }, 3000);

})($); // La IIFE recibe como argumento el objeto básico de jQuery
