<?php
include "conexion.php";
$nombre = $_POST['nombrecurso'];
$cod= $_POST['codcurso'];
$sql="SELECT * FROM curso WHERE COD_CURSO='{$cod}'";
$res = $conexion->query($sql);
if(!$res) die ($conexion->error);
$nfilas = $res-> num_rows;
if($nfilas>0){
	echo 1;
}else{
	$stmt = $conexion->stmt_init();
			$sql = "INSERT INTO curso  VALUES (?,?)";
			if(!$stmt->prepare($sql)) die($conexion->error);
			if(!$stmt->bind_param('ss',$cod,$nombre)) die($stmt->error) ;
			if(!$stmt->execute()) die ($stmt->error);
	echo 2;
}
?>