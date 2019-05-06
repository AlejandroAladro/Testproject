<?php 

include "conexion.php";
session_start();
 $campos=$_POST['campos'];

 

$contador=0;
$nombre = 'radio';

$aciertos=0;
$fallos = 0;
$blancos = 0;

$aprobado='';





if(isset($_POST['idexamen'])){

	$idexamen = $_POST['idexamen'];
}
$fecha = Date('Y/m/d');


$arrayrespuestas = array();

for ($i = 1 ; $i<=$campos ; $i++){
	$nombre='radio'.$i;
	if(isset($_POST[$nombre])){
		array_push($arrayrespuestas ,$_POST[$nombre]);
	}
}



for($i=0;$i<count($arrayrespuestas);$i++){

	$sql="SELECT * FROM respuesta WHERE ID_RESPUESTA = {$arrayrespuestas[$i]}";
	$res = $conexion->query($sql);
	if(!$res) die ($conexion->error);
	$fila = $res->fetch_object();
	if($fila->CORRECTA == "true"){
		$aciertos++;
	}else{
		$fallos++;
	}				
}

if($aciertos >= $campos/2){
	$aprobado = 'true';
}else{
	$aprobado ='false';
}


$blancos = $campos-($aciertos+$fallos);
			
			if(isset($_SESSION['alumno']) && $idexamen>0){
				$user = $_SESSION['alumno'];
				$stmt = $conexion->stmt_init();  
					$sql = "INSERT INTO historiaalumno (USERNAME,ID_EXAMEN,FECHA,ERRORES,ACIERTOS,BLANCOS,APROBADO)  VALUES (?,?,?,?,?,?,?)";   
		 			if(!$stmt->prepare($sql)) die($conexion->error);     
		 			if(!$stmt->bind_param('sisiiis',$user,$idexamen,$fecha,$fallos,$aciertos,$blancos,$aprobado)) die($stmt->error) ;
					if(!$stmt->execute()) die ($stmt->error);
			}

					




$data = array('aciertos' => $aciertos , 'fallos' => $fallos , 'blancos' => $blancos);
header("Content-Type: application/json");
echo json_encode($data);




			


 ?>