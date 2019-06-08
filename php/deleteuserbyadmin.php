<?php
include '../php/conexion.php';

$nombre = $_POST['username'];

$stmt = $conexion->stmt_init();
$sql = "DELETE FROM usuario WHERE USERNAME = ?";
if(!$stmt->prepare($sql)) die($conexion->error);
if(!$stmt->bind_param('s',$nombre)) die($stmt->error) ;
if(!$stmt->execute()) die ($stmt->error);

	
?>