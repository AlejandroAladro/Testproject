<?php
	session_start();
	if(isset($_SESSION['alumno']) || isset($_SESSION['profesor']) || isset($_SESSION['admin'])){
	
	echo 1;
}else{
	echo 0;
}
?>