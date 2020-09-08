<?php
    $destino = "handdy.vargas@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    $checkbox = $_POST["checkbox"];
    $contenido = "Nom i Cognom: " . $nombre . "\Nom i Cognom: " . $correo . "\Telèfon de contacte: " .$telefono . "\Missatge: " . $mensaje . "\nAvís legal : " . $checkbox; 
    mail($destino,"Formulari de contacte",$contenido);
    header("Location:index.html");
?>