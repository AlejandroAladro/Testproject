<?php
include "conexion.php";
$user = $_POST['usuario'];
$tipo = $_POST['tipo'];
				$stmt = $conexion->stmt_init();
$sql = "UPDATE  usuario SET TIPO = ?  WHERE USERNAME = ? ";
if(!$stmt->prepare($sql)) die($conexion->error);
if(!$stmt->bind_param('ss',$tipo,$user)) die($stmt->error) ;
if(!$stmt->execute()) die ($stmt->error);
?>