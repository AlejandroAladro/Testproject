<?php 

include "conexion.php";

$nombre = $_POST['nombreasig'];
$codasig = $_POST['codasig'];
$codcurso = $_POST['codcurso'];

$sql="SELECT * FROM asignatura WHERE COD_ASIGNATURA='{$codasig}'";
$res = $conexion->query($sql);
if(!$res) die ($conexion->error);
$nfilas = $res-> num_rows;

if($nfilas>0){
	echo 1;
}else{

	$stmt = $conexion->stmt_init();  
 			$sql = "INSERT INTO asignatura  VALUES (?,?,?)";   
 			if(!$stmt->prepare($sql)) die($conexion->error);     
 			if(!$stmt->bind_param('sss',$codasig,$codcurso,$nombre)) die($stmt->error) ;
			if(!$stmt->execute()) die ($stmt->error);

	echo 2;
} 

 ?>