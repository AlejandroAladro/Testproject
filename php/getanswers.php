<?php
include 'conexion.php';
$codigo = $_POST['codigo'];
$sql="SELECT  pregunta.ID_PREGUNTA,TEXTO_P,ID_RESPUESTA,TEXTO_R,CORRECTA FROM respuesta ,pregunta WHERE respuesta.ID_PREGUNTA = {$codigo} and pregunta.ID_PREGUNTA = {$codigo} ";
	$res=mysqli_query($conexion,$sql);
	$datos=array();
		while ($fila = mysqli_fetch_assoc($res)) {
		$datos[]=$fila;
				}
		header("Content-Type: application/json");
		echo json_encode($datos);
		mysqli_close($conexion);
?>