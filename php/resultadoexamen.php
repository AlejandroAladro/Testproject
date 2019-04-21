<?php 

include "conexion.php";
 $campos=$_POST['campos'];

 

$contador=0;
$nombre = 'radio';

$aciertos=0;
$fallos = 0;
$blancos = 0;


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

$blancos = $campos-($aciertos+$fallos);






$data = array('aciertos' => $aciertos , 'fallos' => $fallos , 'blancos' => $blancos);
header("Content-Type: application/json");
echo json_encode($data);



 ?>