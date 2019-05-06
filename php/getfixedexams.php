<?php

include 'conexion.php';

$codigoasig = $_POST['codigo'];


$sql="SELECT * FROM examen WHERE ID_ASIGNATURA = '{$codigoasig}' ";
	$res=mysqli_query($conexion,$sql);
	$datos=array();

		while ($fila = mysqli_fetch_assoc($res)) {
		$datos[]=$fila;
				}
		header("Content-Type: application/json");
		echo json_encode($datos);
		mysqli_close($conexion);




?>