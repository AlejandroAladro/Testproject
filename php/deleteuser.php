<?php
include '../php/conexion.php';
session_start();
if(isset($_SESSION['alumno'])){
	$nombre= $_SESSION['alumno'];
}elseif (isset($_SESSION['profesor'])){
	$nombre= $_SESSION['profesor'];
}elseif (isset($_SESSION['admin'])){
	$nombre= $_SESSION['admin'];
}
$stmt = $conexion->stmt_init();
$sql = "DELETE FROM usuario WHERE USERNAME = ?";
if(!$stmt->prepare($sql)) die($conexion->error);
if(!$stmt->bind_param('s',$nombre)) die($stmt->error) ;
if(!$stmt->execute()) die ($stmt->error);
session_destroy();
	
?>