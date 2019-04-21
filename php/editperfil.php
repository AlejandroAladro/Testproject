<?php 

include 'conexion.php';

$nombre = $_POST['nombre'];
$ape1 = $_POST['apellido1'];
$ape2 = $_POST['apellido2'];
$dni = $_POST['dni'];
$email = $_POST['email'];
$username = $_POST['username'];




				$stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  usuario SET NOMBRE = ? , APELLIDO1 = ? , APELLIDO2 = ?, DNI = ? , EMAIL= ?   WHERE USERNAME = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssssss',$nombre,$ape1,$ape2,$dni,$email,$username)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

 ?>