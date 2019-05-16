<?php
	session_start();
	
	if(isset($_SESSION['alumno'])){
		echo "alumno";
	}elseif (isset($_SESSION['profesor'])) {
		echo "profesor";
	}elseif (isset($_SESSION['admin'])) {
		echo "admin";
	}else{
		echo "nosesion";
	}
?>