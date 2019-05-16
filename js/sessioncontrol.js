$(document).ready(function() {

    $('#botonesmenu').hide();
    $('.alumno').hide();
    $('.profesor').hide();
    $('.extra').hide();
    $('#config').hide();

    //############################## funcion ajax que comprueba que tipo de usuario esta conectado  ############################################################
    $.get("../php/sessioncontrol.php", function(data, estado) {
        var respuesta = data

        //depende de que tipo de usuario se encuentre conectado se muestraa un menu u otro ###########
        if (respuesta == "nosesion") {
            $('#botonesmenu').show()
        } else if (respuesta == "alumno") {
            $('.alumno').show();
            $('#config').show();

        } else if (respuesta == "profesor") {
            $('.profesor').show();
            $('#config').show();

        } else if (respuesta == "admin") {
            $('.extra').show();
            $('#config').show();

        }

    })

    //##########################################################################################
    //############################# funcion ajax que no rellena el boton  con el nombre del usuario conectado #############################################################

    $.get("../php/usuarioactive.php", function(data, estado) {
        if (estado == "success") {
            if (data != "null") {
                $('#btnGroupDrop1').html(data);
            }
        }
    })

})

//##########################################################################################