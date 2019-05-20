$(document).ready(function() {
    $('.alert').hide();



    //############################# funcion ajax que comprueba si hay una sesion iniciada #############################
    $.get("../php/sessionexception.php", function(data, estado) {
            if (estado == "success") {
                if (data == 1) {
                    // si hay una sesion iniciada no se podrra a entrar a la vista del login o registro nos redireccionara al index
                    $(location).attr("href", "index.html")
                }
            }
        })
        //##########################################################################################

    //cunado entramos en la vista login la ventana activa sera la del login y no la del registro        
    $('#entrar').addClass("active")
        //el formulario de registro se oculta
    $('#registro').hide();
    //##########################################################################################



    //################################## funcion de evento click en enlaces de la vista login ########################################################

    $('a').click(function() {
            // si pinchamos en el enlace registrate...
            //le añadimos la clase active y quitamos de los otros enlaces el active.
            //mostramos el formulario de registro ocultamos el login y el footer como hay scroll de pagina lo ponemos en relative 
            if ($(this).html() == "Regístrate") {
                $('a').removeClass("active")
                $(this).addClass("active")
                $('#registro').show();
                $('#login').hide();
                $('#exito').hide();

                //##########################################################################################
                //si pinchamos en el login...
                //le ponemos la clase active ocultamos el registro y fijamos el footer ya que no se superpone al contenido 
            } else {
                $('a').removeClass("active")
                $(this).addClass("active")
                $('#registro').hide();
                $('#login').show();
                $('#exito').hide();


            }
        })
        //##########################################################################################

    //#################################### evento submit formulario login  ######################################################
    //paramos el comportamiento por defecto nada mas darle al boton del login
    $('#login').submit(function() {
        event.preventDefault();

        //cogemos el nombre y la contraseña introducidas en los campos
        var user = $('#user').val()
        var pass = $('#pass').val();
        //formamos el json con esas variables 
        var datos = {
            "usuario": user,
            "password": pass
        }

        //------- a continuacion mandamos el json con ajax a un script php que nos dira si los datos son validos o no. ####---------
        $.post("../php/login.php", datos, function(data, estado) {
            if (estado == "success") {
                var respuesta = data
                if (respuesta == 1) {
                    // si es correcto noes llevara al index 
                    $(location).attr("href", "index.html")
                } else {
                    //si no es correcto saldra un alert diciendo que los datos son  erroneos
                    $('#alertlogin').slideDown();

                }
            }
        })

    })

    //######################################## fin submin login ##################################################
    //##########################################################################################

    //###################################### evento submit registro ####################################################
    $('body').on('submit', '#registro', function() {
        //se para el comportamiento por defecto
        event.preventDefault();

        //se envia por ajax todo el formulario a un script php
        $.ajax({
            type: "POST",
            url: "../php/registro.php",
            data: $("#registro").serialize(),
            success: function(respuesta) {
                //la respiuesta del php es exitosa , y ocultamos el formulario y mostramos un alert de exito
                $('#registro').hide();
                $('#exito').show();

            }
        })
    })

})