<?php 

	session_start();


	if(isset($_SESSION['alumno']) || isset($_SESSION['profesor']) || isset($_SESSION['admin'])){
	session_destroy();
	header("location:../view/index.html");
}else{
	header("location:../view/index.html");
}
	



 ?>