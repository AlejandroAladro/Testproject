$(document).ready(function(){

	$('#botonesmenu').hide();
	$('.alumno').hide();
	$('.profesor').hide();
	$('.extra').hide();
	$('#config').hide();
	


	$.get("../php/sessioncontrol.php",function(data,estado){
		var respuesta = data
		

		if(respuesta == "nosesion"){
			$('#botonesmenu').show()
		}else if(respuesta == "alumno"){
			$('.alumno').show();
			$('#config').show();

		}
		else if(respuesta == "profesor"){
			$('.profesor').show();
			$('#config').show();
			
		}
		else if(respuesta == "admin"){
			$('.extra').show();
			$('#config').show();

		}

	})


	$.get("../php/usuarioactive.php",function(data,estado){
		if(estado=="success"){
			if(data != "null"){
				$('#btnGroupDrop1').html(data)
			}
		}
	})

})