<?php 
session_start();
include "conexion.php";
	
	
		

			$user = $_POST['usuario'];
		$pass = $_POST['password'];
		



		$sql="SELECT * FROM usuario where USERNAME = '{$user}'";
						$res = $conexion->query($sql);
						if(!$res) die ($conexion->error);
						$fila = $res->fetch_object();

						if($fila==null){
							echo 0;
						}elseif(password_verify ($pass, $fila->PASSWORD) == false){
							echo 0;
						}else{
                            if($fila->TIPO=='ADMIN'){
                                $_SESSION['admin']=$user;
                                echo 1;
                                
                            }elseif($fila->TIPO=='PROFESOR'){
                                $_SESSION['profesor']=$user;
                                echo 1;
                            }else {
                            	$_SESSION['alumno']=$user;
                            	echo 1;
                            }
							
							
						}	


 ?>