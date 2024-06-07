<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $empresa = $_POST["empresa"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "nicolasluque_facundo@hotmail.com";
    $asunto = "Mensaje de contacto desde el sitio web";
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Apellido: $apellido\n";
    $contenido .= "Empresa: $empresa\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Mensaje:\n$mensaje";

    $headers = "From: $nombre <$email>";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "¡El mensaje se envió correctamente!";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Error: Se requiere el método POST.";
}
?>
