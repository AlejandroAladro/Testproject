$(document).ready(function(){
$('.alert').hide();




	$.get("../php/sessionexception.php",function(data,estado){
		if(estado=="success"){
			if(data == 1){
				$(location).attr("href","index.html")
			}
		}
	})

	
	$('#entrar').addClass("active")
	$('#registro').hide();

	


	$('a').click(function(){

		if($(this).html()=="Regístrate"){
			$('a').removeClass("active")
			$(this).addClass("active")
			$('#registro').show("slow");
			$('#login').hide();
			$('#exito').hide();
			$('#footer').removeClass('fixed-bottom');
			$('#footer').addClass('sticky-bottom');



		}else{
			$('a').removeClass("active")
			$(this).addClass("active")
			$('#registro').hide();
			$('#login').show("slow");
			$('#exito').hide();
			$('#footer').removeClass('sticky-bottom');
			$('#footer').addClass('fixed-bottom');
			
		}
	})



	$('#login').submit(function(){
		event.preventDefault();

		var user = $('#user').val()
		var pass = $('#pass').val();

		var datos = {
			"usuario":user,
			"password":pass
		}


		$.post("../php/login.php",datos,function(data,estado){
			if (estado=="success") {
				var respuesta = data
				if(respuesta == 1){
					$(location).attr("href","index.html")
				}else{

					$('#alertlogin').slideDown();

				}
			}
		})
		  
	})

	$('body').on('submit','#registro',function(){

		event.preventDefault();

		$.ajax({
        type:"POST",
        url:"../php/registro.php",
        data:$("#registro").serialize(),
        success: function(respuesta) {
         
        	$('#registro').hide();
			$('#exito').show();
    
             }
          })

		 console.log('ok')

	})



})

