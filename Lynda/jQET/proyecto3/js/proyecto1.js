/**
 * Created by ivan on 28/12/16.
 */
$("document").ready(function () {
    "use strict";
    // Insertar el contenido usando jQuery
    $("#content").append("<p>Hola Mundo! -> con jQuery</p>");

});

// Insertar el contenido a vieja usansa usando el DOM
window.addEventListener("DOMContentLoaded", function() {
    "use strict";
    var element = document.getElementById("content");
    var para = document.createElement("p");
    var text = document.createTextNode("Hola Mundo! -> sin jQuery");

    para.appendChild(text);
    element.appendChild(para);
});
