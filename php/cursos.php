<?php
include "conexion.php";
$sql="SELECT * FROM curso ";
	$res=mysqli_query($conexion,$sql);
	$datos=array();
		while ($fila = mysqli_fetch_assoc($res)) {
		$datos[]=$fila;
				}
		header("Content-Type: application/json");
		echo json_encode($datos);
		mysqli_close($conexion);
?>