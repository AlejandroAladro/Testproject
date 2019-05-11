<?php 

include "conexion.php";
session_start();


$user = $_SESSION['alumno'];

$sql="SELECT DESCRIPCION, FECHA,ERRORES,ACIERTOS,BLANCOS,APROBADO FROM historiaalumno,examen WHERE USERNAME ='{$user}' AND historiaalumno.ID_EXAMEN = examen.ID_EXAMEN";
	$res=mysqli_query($conexion,$sql);
	$datos=array();

		while ($fila = mysqli_fetch_assoc($res)) {
		$datos[]=$fila;
				}
		header("Content-Type: application/json");
		echo json_encode($datos);
		mysqli_close($conexion);



 ?>

 