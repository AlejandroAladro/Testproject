Cuando bajas el proyecto no va a funcionar porque tienes que modificar con los datos de acceso a tu respectiva BD en mi caso phpmyadmin.

Paso 1:
Abre el fichero conexion.php
Ruta: ./php/conexion.php

Paso2:
Modificar la linea en la que creamos la conexión

$conexion = new mysqli("localhost", "USER", "PASSWORD", "BDNAME");

Donde USER tiene que ser reemplazado por tu usuario de phpmyadmin,PASSWORD por la contraseña de dicho usuario y BDNAME el nombre de la base de datos que creaste con el sql del proyecto.

Por ejemplo en mi caso:
$conexion = new mysqli("localhost", "root", "", "examenestest");

dejo el segundo parametro vacío proque no tengo contraseña.
