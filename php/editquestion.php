<?php 

include 'conexion.php';

$idpregunta = $_POST['codpreguntaedit'];
$textopregunta= $_POST['pregunta'];

$verdadera = $_POST['radiorespuesta'];

$respuesta1 = $_POST['respuesta1'];
$respuesta2 = $_POST['respuesta2'];
$respuesta3 = $_POST['respuesta3'];
$respuesta4 = $_POST['respuesta4'];

$idrespuesta1 = $_POST['codrespuesta1edit'];
$idrespuesta2 = $_POST['codrespuesta2edit'];
$idrespuesta3 = $_POST['codrespuesta3edit'];
$idrespuesta4 = $_POST['codrespuesta4edit'];


$true = 'true';
$false = 'false';




				$stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  pregunta SET TEXTO_P = ?  WHERE ID_PREGUNTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('si',$textopregunta,$idpregunta)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);


                if($verdadera == "true1"){

                $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta1,$true,$idrespuesta1)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta2,$false,$idrespuesta2)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                 $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta3,$false,$idrespuesta3)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                 $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta4,$false,$idrespuesta4)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);


                }elseif ($verdadera == "true2") {

                	$stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta1,$false,$idrespuesta1)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta2,$true,$idrespuesta2)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                 $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta3,$false,$idrespuesta3)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                 $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta4,$false,$idrespuesta4)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                	
                }elseif ($verdadera == "true3") {

                	$stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta1,$false,$idrespuesta1)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta2,$false,$idrespuesta2)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                 $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta3,$true,$idrespuesta3)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                 $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta4,$false,$idrespuesta4)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                	
                }elseif ($verdadera == "true4") {
                	$stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta1,$false,$idrespuesta1)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta2,$false,$idrespuesta2)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                 $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta3,$false,$idrespuesta3)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                 $stmt = $conexion->stmt_init(); 
                $sql = "UPDATE  respuesta SET TEXTO_R = ? ,CORRECTA = ? WHERE ID_RESPUESTA = ? ";   
                if(!$stmt->prepare($sql)) die($conexion->error);     
                if(!$stmt->bind_param('ssi',$respuesta4,$true,$idrespuesta4)) die($stmt->error) ;
                if(!$stmt->execute()) die ($stmt->error);

                	
                }


 ?>