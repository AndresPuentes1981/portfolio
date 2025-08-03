<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "propiedadesurquiza@gmail.com";
    $subject = "Nueva consulta desde la web";

    $message = "Nombre: " . $_POST['nombre'] . "\n";
    $message .= "Apellido: " . $_POST['apellido'] . "\n";
    $message .= "Username: " . $_POST['username'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Dirección 1: " . $_POST['direccion1'] . "\n";
    $message .= "Dirección 2: " . $_POST['direccion2'] . "\n";
    $message .= "Situación: " . $_POST['situacion'] . "\n";
    $message .= "Categoría: " . $_POST['categoria'] . "\n";
    $message .= "Mensaje: " . $_POST['mensaje'] . "\n";

    $headers = "From: " . $_POST['email'];

    if (mail($to, $subject, $message, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>