<?php
include 'conexion.php';
session_start();

$sql="SELECT * FROM usuario WHERE USERNAME != '{$_SESSION['admin']}' ";
	$res=mysqli_query($conexion,$sql);
	$datos=array();
		while ($fila = mysqli_fetch_assoc($res)) {
		$datos[]=$fila;
				}
		header("Content-Type: application/json");
		echo json_encode($datos);
		mysqli_close($conexion);
?>