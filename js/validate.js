//################################ funcion validar nombre  ##########################################################
function valnom() {

    var nombre = document.getElementById('nomb').value;

    var exp = new RegExp("^[A-Z]?[a-z]+$");

    var ok = exp.test(nombre);

    if (ok == false) {
        $('button').prop("disabled", true);
        $('#nomb').addClass('is-invalid');
        $('#nomb').removeClass('is-valid');
        $('#alertnombre').slideDown();
        document.getElementById('nomb').focus();


    } else {
        $('button').prop("disabled", false);
        $('#nomb').addClass('is-valid');
        $('#nomb').removeClass('is-invalid');
        $('#alertnombre').slideUp();
    }

}
//##########################################################################################

//#################################### funcion validar apellido ######################################################

function valape() {
    var nombre = document.getElementById('ape1').value;

    var exp = new RegExp("^[A-Z]?[a-z]+$");

    var ok = exp.test(nombre);

    if (ok == false) {
        $('button').prop("disabled", true);
        $('#ape1').addClass('is-invalid');
        $('#ape1').removeClass('is-valid');
        $('#alertape1').slideDown();
        document.getElementById('ape1').focus();


    } else {
        $('button').prop("disabled", false);
        $('#ape1').addClass('is-valid');
        $('#ape1').removeClass('is-invalid');
        $('#alertape1').slideUp();
    }

}

function valape2() {
    var nombre = document.getElementById('ape2').value;

    var exp = new RegExp("^[A-Z]?[a-z]+$");

    var ok = exp.test(nombre);

    if (ok == false) {
        $('button').prop("disabled", true);
        $('#ape2').addClass('is-invalid');
        $('#ape2').removeClass('is-valid');
        $('#alertape2').slideDown();
        document.getElementById('ape2').focus();


    } else {
        $('button').prop("disabled", false);
        $('#ape2').addClass('is-valid');
        $('#ape2').removeClass('is-invalid');
        $('#alertape2').slideUp();
    }

}
//##########################################################################################
//##########################################################################################

//##################################### funcion valida dni #####################################################

function valdni() {

    var dni = document.getElementById('dni').value;
    var exp = new RegExp("^\\d{8}[A-Za-z]$");
    var ok = exp.test(dni);

    if (ok == false) {
        $('button').prop("disabled", true);
        $('#dni').addClass('is-invalid');
        $('#dni').removeClass('is-valid');
        $('#alertdni').slideDown();
        document.getElementById('dni').focus();


    } else {
        $('button').prop("disabled", false);
        $('#dni').addClass('is-valid');
        $('#dni').removeClass('is-invalid');
        $('#alertdni').slideUp();
    }
}
//##########################################################################################
//##########################################################################################

//##################################  funcion valida email y comprueba si existe ########################################################


function valemail() {
    var email = document.getElementById('email').value;
    var exp = new RegExp("^\\w+(\.)?\\w+[@]\\w+[.](\\w+\\.)?[a-z]{2,3}$");
    var ok = exp.test(email);



    $.ajax({
        type: "POST",
        url: "../php/validaremail.php",
        data: $("#registro").serialize(),
        success: function(respuesta) {


            if (respuesta == 0) {
                $('#email').addClass("is-invalid");
                $('#alertemail').slideUp();
                $('#alertemail2').show();

            } else {

                $('#alertemail2').hide();

                if (ok == false) {




                    $('button').prop("disabled", true);
                    $('#email').addClass('is-invalid');
                    $('#email').removeClass('is-valid');
                    $('#alertemail').slideDown();
                    document.getElementById('email').focus();


                } else if (ok == true) {
                    $('button').prop("disabled", false);
                    $('#email').addClass('is-valid');
                    $('#email').removeClass('is-invalid');
                    $('#alertemail').slideUp();
                }


            }


        }
    })

}

//##########################################################################################
//##########################################################################################

//######################################## comprueba el nombre de usuario y lo valida  ##################################################


function valuser() {

    $.ajax({
        type: "POST",
        url: "../php/validuser.php",
        data: $("#registro").serialize(),
        success: function(respuesta) {


            if (respuesta == 2) {
                $('button').prop("disabled", true);
                $('#userr').removeClass("is-valid");
                $('#userr').addClass("is-invalid");
                $('#alertuser').show();


            } else {
                $('button').prop("disabled", false);
                $('#userr').removeClass("is-invalid");
                $('#userr').addClass("is-valid");
                $('#alertuser').hide();


            }

        }
    })
}

//##########################################################################################
//##########################################################################################

//#####################################  funcion comprueba que las contraseñas coinciden  #####################################################

function valpass() {
    var pass1 = $('#password1').val();
    var pass2 = $('#password2').val();

    if (pass2 != pass1) {
        $('button').prop("disabled", true);
        $('#password2').removeClass("is-valid");
        $('#password2').addClass("is-invalid");
        $('#password1').removeClass("is-valid");
        $('#password1').addClass("is-invalid");
        document.getElementById('password2').focus();
        $('#alertpassword').show();
    } else {
        $('button').prop("disabled", false);
        $('#password2').addClass("is-valid");
        $('#password2').removeClass("is-invalid");
        $('#password1').addClass("is-valid");
        $('#password1').removeClass("is-invalid");
        $('#alertpassword').hide();
    }
}
//##########################################################################################