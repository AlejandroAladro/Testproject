<?php 

include "conexion.php";
session_start();


if(isset($_SESSION['alumno'])){
	$nombre= $_SESSION['alumno'];
}elseif (isset($_SESSION['profesor'])){
	$nombre= $_SESSION['profesor'];
}elseif (isset($_SESSION['admin'])){
	$nombre= $_SESSION['admin'];
}


$pass = $_POST['password'];



$sql="SELECT * FROM usuario where USERNAME = '{$nombre}'";
						$res = $conexion->query($sql);
						if(!$res) die ($conexion->error);
						$fila = $res->fetch_object();

						if(password_verify ($pass, $fila->PASSWORD) == false){
								echo 1;
						}else{
							echo 0;
						}





 ?>