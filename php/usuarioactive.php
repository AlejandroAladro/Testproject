<?php 
session_start();

if(isset($_SESSION['alumno'])){
	echo $_SESSION['alumno'];
}elseif (isset($_SESSION['profesor'])){
	echo $_SESSION['profesor'];
}elseif (isset($_SESSION['admin'])){
	echo $_SESSION['admin'];
}else {
	echo "null";
}



 ?>