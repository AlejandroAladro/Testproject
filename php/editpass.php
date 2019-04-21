<?php 

include "conexion.php";
session_start();

if(isset($_SESSION['alumno'])){
	$nombre= $_SESSION['alumno'];
}elseif (isset($_SESSION['profesor'])){
	$nombre= $_SESSION['profesor'];
}elseif (isset($_SESSION['admin'])){
	$nombre= $_SESSION['admin'];
}

$newpass= $_POST['password1'];

$pas_cifrado=password_hash($newpass, PASSWORD_DEFAULT);

$stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  usuario SET  PASSWORD= ?   WHERE USERNAME = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ss',$pas_cifrado,$nombre)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);


 ?>