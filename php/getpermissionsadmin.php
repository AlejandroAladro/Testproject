<?php
include 'conexion.php';
$credential = 'qwerty123456';
$codigo = $_POST['credencial'];
$user = $_POST['nombre'];
$tipo = 'ADMIN';
if($codigo == $credential){
				$stmt = $conexion->stmt_init();
$sql = "UPDATE  usuario SET TIPO = ?   WHERE USERNAME = ? ";
if(!$stmt->prepare($sql)) die($conexion->error);
if(!$stmt->bind_param('ss',$tipo,$user)) die($stmt->error) ;
if(!$stmt->execute()) die ($stmt->error);
echo 0;
}else{
	echo 1;
}
?>