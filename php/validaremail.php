<?php
include '../php/conexion.php';
$email=$_POST['email'];
$sql="SELECT EMAIL FROM usuario WHERE EMAIL='{$email}'";
$res = $conexion->query($sql);
if(!$res) die ($conexion->error);
$nfilas = $res-> num_rows;
if($nfilas>0){
	echo 0;
}else{
	echo 1;
}
?>