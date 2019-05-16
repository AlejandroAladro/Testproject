<?php
include "conexion.php";
$codasig=$_POST['codasig'];
$desc=$_POST['descripcion'];
$idpreguntas = $_POST['idpreguntas'];
if(count($idpreguntas)>0 && count($idpreguntas)<=20){
echo 0;
$stmt = $conexion->stmt_init();
$sql = "INSERT INTO examen (ID_ASIGNATURA,DESCRIPCION)  VALUES (?,?)";
if(!$stmt->prepare($sql)) die($conexion->error);
if(!$stmt->bind_param('ss',$codasig,$desc)) die($stmt->error) ;
if(!$stmt->execute()) die ($stmt->error);
$ultimodiexamen=mysqli_insert_id($conexion);
for($i=0;$i<count($idpreguntas);$i++){
$stmt = $conexion->stmt_init();
$sql = "INSERT INTO fixedexams (ID_EXAMEN,ID_PREGUNTA)  VALUES (?,?)";
if(!$stmt->prepare($sql)) die($conexion->error);
if(!$stmt->bind_param('ii',$ultimodiexamen,$idpreguntas[$i])) die($stmt->error) ;
if(!$stmt->execute()) die ($stmt->error);
}
}else{
	echo 1;
}
?>