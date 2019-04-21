<?php 
include 'conexion.php';


$nombre = $_POST['nombre'];
$ape1 = $_POST['apellido1'];
$ape2 = $_POST['apellido2'];
$dni = $_POST['dni'];
$email = $_POST['email'];
$usuario = $_POST['usuario'];
$password = $_POST['password'];





 $pas_cifrado=password_hash($password, PASSWORD_DEFAULT);
         		
	$sql="INSERT INTO usuario (NOMBRE,APELLIDO1,APELLIDO2,DNI,EMAIL,USERNAME,PASSWORD) VALUES ('{$nombre}','{$ape1}','{$ape2}','{$dni}','{$email}','{$usuario}','{$pas_cifrado}')";
	$res = $conexion->query($sql);
	if(!$res) die ($conexion->error);
						
 ?>