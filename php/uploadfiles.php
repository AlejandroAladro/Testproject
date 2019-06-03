<?php 



$asig = $_POST['asignaturaupload'];
$nombre_fichero = $_FILES['file-0']['name'];
$tamaño_fichero=$_FILES['file-0']['size'];
$tipo_fichero = $_FILES['file-0']['type'];
$directorio = '../ficheros/';

if($tamaño_fichero <= 200000){
    move_uploaded_file($_FILES['file-0']['tmp_name'],$directorio.$nombre_fichero);
    echo "subido correcto";
}


header("location:../view/index.html");



 ?>