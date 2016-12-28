/**
 * Created by ivan on 28/12/16.
 */
$("document").ready(function() {
    // Crear contenido nuevo
    var nuevoP = $("<p>");
    nuevoP.append("<em>Hola alli!</em>");

    $("#example").html(nuevoP);

    $("#creation").prepend("Mira esto! ");

    // Cambiar el contenido existente
    $("#example").html("<h2>This is a new H2</h2>");

    $("#example").text("<h2>This is a new H2</h2>");
});