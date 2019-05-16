<?php
include "conexion.php";
$codigoasig = $_POST['codigoasig'];
$textopregunta = $_POST['pregunta'];
$respuesta1 = $_POST['respuesta1'];
$respuesta2 = $_POST['respuesta2'];
$respuesta3 = $_POST['respuesta3'];
$respuesta4 = $_POST['respuesta4'];
$verdadera = $_POST['radiorespuesta'];
$true = 'true';
$false = 'false';
$stmt = $conexion->stmt_init();
			$sql = "INSERT INTO pregunta (TEXTO_P,COD_ASIGNATURA)  VALUES (?,?)";
			if(!$stmt->prepare($sql)) die($conexion->error);
			if(!$stmt->bind_param('ss',$textopregunta,$codigoasig)) die($stmt->error) ;
			if(!$stmt->execute()) die ($stmt->error);
			$ultimaPregunta=mysqli_insert_id($conexion);
			echo "$ultimaPregunta";
			
				if($verdadera=="true1"){
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta1,$true)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta2,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta3,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta4,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
				}else if($verdadera=="true2"){
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta1,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta2,$true)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta3,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta4,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
				}else if($verdadera=="true3"){
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta1,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta2,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta3,$true)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta4,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
				}else if($verdadera=="true4"){
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta1,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta2,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta3,$false)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
					$sql = "INSERT INTO respuesta (ID_PREGUNTA,TEXTO_R,CORRECTA)  VALUES (?,?,?)";
					if(!$stmt->prepare($sql)) die($conexion->error);
					if(!$stmt->bind_param('iss',$ultimaPregunta,$respuesta4,$true)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
				}
				
			
?>