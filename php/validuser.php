<?php
include '../php/conexion.php';
$username=$_POST['usuario'];
$sql="SELECT USERNAME FROM usuario WHERE USERNAME='{$username}'";
$res = $conexion->query($sql);
if(!$res) die ($conexion->error);
$nfilas = $res-> num_rows;
if($nfilas>0){
	echo 2;
}else{
	echo 1;
}
?>