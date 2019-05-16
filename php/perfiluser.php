<?php
include '../php/conexion.php';
$nombre = $_POST['nombre'];
$sql="SELECT * FROM usuario where USERNAME = '{$nombre}' ";
	$res=mysqli_query($conexion,$sql);
	$datos=array();
		while ($fila = mysqli_fetch_assoc($res)) {
		$datos[]=$fila;
				}
		header("Content-Type: application/json");
		echo json_encode($datos);
		mysqli_close($conexion);
?>