<?php 
include "conexion.php";

$codigo = $_POST['codigo'];

$stmt = $conexion->stmt_init(); 
      $sql = "DELETE FROM asignatura WHERE COD_ASIGNATURA = ?";   
      if(!$stmt->prepare($sql)) die($conexion->error);     
      if(!$stmt->bind_param('s',$codigo)) die($stmt->error) ;
      if(!$stmt->execute()) die ($stmt->error);
 ?>