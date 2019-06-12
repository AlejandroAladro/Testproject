

$(document).ready(function() {

        $('body').on('click',".page-item",function(){
            $('.page-item').removeClass('active')
                    $(this).addClass('active')
        })
         $("#file-0").fileinput({
        theme: 'fas',
        uploadUrl: '#'
    }).on('filepreupload', function(event, data, previewId, index) {
        alert('The description entered is:\n\n' + ($('#description').val() || ' NULL'));
    });

        $('body').on("submit", "#formulariopreguntas", function() {
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "../php/createquestion.php",
                data: $(this).serialize(),
                success: function(respuesta) {
                    console.log("hola")
                    $('#formulariopreguntas').hide();
                    $('#selectcursopregunt').hide();
                    $('#selectasig').hide();
                    $('#alertpregunta').show();
                }
            });
        })
        //#################################################################################################
        //################# botones antes de hacer los modal de los formularios ###########################

        //  $('#botonnewcurso').click(function() {
        //      $('#createcurso').toggle();
        //     $('#alercur1').hide();
        // })

        // $('#botonnewasignatura').click(function() {
        //     $('#createasignatura').toggle();
        //     $('#alertasig1').hide();
        // })
        //#################################################################################################

        $('a').click(function() {

            if ($(this).html() == 'Administrar') {
                $('#listconfig').hide();
                $('#cambiarpass').hide();
                $('#datosperfil').hide();
                $('#alertcurso1').hide();
                $('#credencial').hide();
                $('.home').hide();
                $('#listadmin').show();
                $('#how').hide();
                $('a').click(function() {
                    $('a').removeClass('active')
                    $(this).addClass('active')

                    if ($(this).html() == 'Editar Usuarios') {

                        $('.home').hide();
                        $('#createcurso').hide();
                        $('#tableusers').show();
                        $('#tablecursos').hide();

                        $.get("../php/usuarios.php", function(data, estado) {
                            
                            if (estado == "success") {
                                $('#tableusers').children('tbody').empty();

                                $.each(data, function(indice, valor) {
                                    if (valor.TIPO == 'PROFESOR') {
                                        $('tbody').append("<tr><td>" + valor.USERNAME + "</td><td class='d-none d-md-table-cell'>" + valor.DNI + "</td><td class='d-none d-md-table-cell'>" + valor.EMAIL + "</td><td><form action='../php/edituser.php' method='post' id='edituserbyadmin'><select name='tipo'><option value='ALUMNO'>ALUMNO</option><option value='ADMIN'>ADMIN</option><option selected>" + valor.TIPO + "</option></select><input type='hidden' name='usuario' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-primary ml-1 ml-md-5' data-toggle='modal' data-target='#modaltransition'>Editar</button></form></td><td><form action='../php/deleteuserbyadmin.php' method='post' id='deleteuserbyadmin'><input type='hidden' name='username' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-danger ml-2'><i class='fas fa-trash-alt'></i></button></form></td></tr>");
                                    } else if (valor.TIPO == 'ADMIN') {
                                        $('tbody').append("<tr><td>" + valor.USERNAME + "</td><td class='d-none d-md-table-cell'>" + valor.DNI + "</td><td class='d-none d-md-table-cell'>" + valor.EMAIL + "</td><td><form action='../php/edituser.php' method='post' id='edituserbyadmin'><select name='tipo'><option value='ALUMNO'>ALUMNO</option><option value='PROFESOR'>PROFESOR</option><option selected>" + valor.TIPO + "</option></select><input type='hidden' name='usuario' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-primary ml-1 ml-md-5' data-toggle='modal' data-target='#modaltransition'>Editar</button></form></td><td><form action='../php/deleteuserbyadmin.php' method='post' id='deleteuserbyadmin'><input type='hidden' name='username' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-danger ml-2'><i class='fas fa-trash-alt'></i></button></form></td></tr>");
                                    } else if (valor.TIPO == 'ALUMNO') {
                                        $('tbody').append("<tr><td>" + valor.USERNAME + "</td><td class='d-none d-md-table-cell'>" + valor.DNI + "</td><td class='d-none d-md-table-cell'>" + valor.EMAIL + "</td><td><form action='../php/edituser.php' method='post' id='edituserbyadmin'><select name='tipo'><option value='PROFESOR'>PROFESOR</option><option value='ADMIN'>ADMIN</option><option selected>" + valor.TIPO + "</option></select><input type='hidden' name='usuario' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-primary ml-1 ml-md-5' data-toggle='modal' data-target='#modaltransition'>Editar</button></form></td><td><form action='../php/deleteuserbyadmin.php' method='post' id='deleteuserbyadmin'><input type='hidden' name='username' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-danger ml-2'><i class='fas fa-trash-alt'></i></button></form></td></tr>");
                                    }
                                })

                                 $("#tableusers").paginationTdA({
                                    elemPerPage: 5
                                })
                            }
                        })

                                  
                                

                        $('body').on("submit", '#edituserbyadmin', function() {
                            event.preventDefault();

                            $.ajax({
                                type: "POST",
                                url: "../php/edituser.php",
                                data: $(this).serialize(),
                                success: function(respuesta) {}
                            })
                        })

                         $('body').on("submit", '#deleteuserbyadmin', function() {
                            event.preventDefault();

                            $.ajax({
                                type: "POST",
                                url: "../php/deleteuserbyadmin.php",
                                data: $(this).serialize(),
                                success: function(respuesta) {
                                    $.get("../php/usuarios.php", function(data, estado) {
                            
                            if (estado == "success") {
                                $('#tableusers').children('tbody').empty();

                                $.each(data, function(indice, valor) {
                                    if (valor.TIPO == 'PROFESOR') {
                                        $('tbody').append("<tr><td>" + valor.USERNAME + "</td><td class='d-none d-md-table-cell'>" + valor.DNI + "</td><td class='d-none d-md-table-cell'>" + valor.EMAIL + "</td><td><form action='../php/edituser.php' method='post' id='edituserbyadmin'><select name='tipo'><option value='ALUMNO'>ALUMNO</option><option value='ADMIN'>ADMIN</option><option selected>" + valor.TIPO + "</option></select><input type='hidden' name='usuario' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-primary ml-1 ml-md-5' data-toggle='modal' data-target='#modaltransition'>Editar</button></form></td><td><form action='../php/deleteuserbyadmin.php' method='post' id='deleteuserbyadmin'><input type='hidden' name='username' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-danger ml-2'><i class='fas fa-trash-alt'></i></button></form></td></tr>");
                                    } else if (valor.TIPO == 'ADMIN') {
                                        $('tbody').append("<tr><td>" + valor.USERNAME + "</td><td class='d-none d-md-table-cell'>" + valor.DNI + "</td><td class='d-none d-md-table-cell'>" + valor.EMAIL + "</td><td><form action='../php/edituser.php' method='post' id='edituserbyadmin'><select name='tipo'><option value='ALUMNO'>ALUMNO</option><option value='PROFESOR'>PROFESOR</option><option selected>" + valor.TIPO + "</option></select><input type='hidden' name='usuario' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-primary ml-1 ml-md-5' data-toggle='modal' data-target='#modaltransition'>Editar</button></form></td><td><form action='../php/deleteuserbyadmin.php' method='post' id='deleteuserbyadmin'><input type='hidden' name='username' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-danger ml-2'><i class='fas fa-trash-alt'></i></button></form></td></tr>");
                                    } else if (valor.TIPO == 'ALUMNO') {
                                        $('tbody').append("<tr><td>" + valor.USERNAME + "</td><td class='d-none d-md-table-cell'>" + valor.DNI + "</td><td class='d-none d-md-table-cell'>" + valor.EMAIL + "</td><td><form action='../php/edituser.php' method='post' id='edituserbyadmin'><select name='tipo'><option value='PROFESOR'>PROFESOR</option><option value='ADMIN'>ADMIN</option><option selected>" + valor.TIPO + "</option></select><input type='hidden' name='usuario' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-primary ml-1 ml-md-5' data-toggle='modal' data-target='#modaltransition'>Editar</button></form></td><td><form action='../php/deleteuserbyadmin.php' method='post' id='deleteuserbyadmin'><input type='hidden' name='username' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-danger ml-2'><i class='fas fa-trash-alt'></i></button></form></td></tr>");
                                    }
                                })

                                 $("#tableusers").paginationTdA({
                                    elemPerPage: 5
                                })
                            }
                        })
                                }
                            })
                        })

                    } else if ($(this).html() == 'Cursos') {

                        $('.home').hide();
                        $('#createcurso').hide();
                        $('#tableusers').hide();
                        $('#tablecursos').show();
                        $('#alertcurso1').hide();


                        $.get("../php/cursos.php", function(data, estado) {
                            if (estado == "success") {
                                $('#tablecursos').children('tbody').empty();
                                $.each(data, function(indice, valor) {
                                    $('tbody').append("<tr><td>" + valor.COD_CURSO + "</td><td>" + valor.NOMBRE_CURSO + "</td><td><form action='../php/deletecurso.php' method='post' id='eliminarcurso'><input type='hidden' name='codigo' value='" + valor.COD_CURSO + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td></tr>")
                                })

                            }
                        })

                        $('body').on("submit", '#eliminarcurso', function() {
                            event.preventDefault();
                            $.ajax({
                                type: "POST",
                                url: "../php/deletecurso.php",
                                data: $(this).serialize(),
                                success: function(respuesta) {
                                    $.get("../php/cursos.php", function(data, estado) {
                                        if (estado == "success") {
                                            $('#tablecursos').children('tbody').empty();
                                            $.each(data, function(indice, valor) {
                                                $('tbody').append("<tr><td>" + valor.COD_CURSO + "</td><td>" + valor.NOMBRE_CURSO + "</td><td><form action='../php/deletecurso.php' method='post' id='eliminarcurso'><input type='hidden' name='codigo' value='" + valor.COD_CURSO + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td></tr>")

                                            })
                                        }
                                    })
                                }
                            })
                        })

                        $('body').on("submit", '#crearcurso', function() {
                            event.preventDefault();
                            $.ajax({
                                type: "POST",
                                url: "../php/crearcurso.php",
                                data: $(this).serialize(),
                                success: function(respuesta) {
                                    $.get("../php/cursos.php", function(data, estado) {
                                        if (estado == "success") {
                                            $('#tablecursos').children('tbody').empty();

                                            $.each(data, function(indice, valor) {
                                                $('tbody').append("<tr><td>" + valor.COD_CURSO + "</td><td>" + valor.NOMBRE_CURSO + "</td><td><form action='../php/deletecurso.php' method='post' id='eliminarcurso'><input type='hidden' name='codigo' value='" + valor.COD_CURSO + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td></tr>")

                                            })

                                        }

                                    })

                                    if (respuesta == 1) {
                                        $('#alertcurso1').show();
                                    } else {
                                        $('#alertcurso1').hide();
                                        $('#createcurso').hide();
                                        $('#modalcrearcurso').modal("hide");
                                    }
                                }
                            })
                        })
                    }
                })

            } else if ($(this).html() == 'Opciones') {
                $('.home').hide();
                $('#listprofesor').show();
                $('#listconfig').hide();
                $('#datosperfil').hide();
                $('#cambiarpass').hide();
                $('#selectasig').hide();
                $('#contselectprofe').hide();
                $('#selectcursopregunt').hide();
                $('#formulariopreguntas').hide();
                $('#tableasignaturas').hide();
                $('#createasignatura').hide();
                $('#alertpregunta').hide();
                $('#selecteditpreguncurs').hide();
                $('#seleceditpregunasig').hide();
                $('#tablepreguntas').hide();
                $('#alertpreguntaedit').hide();
                $('#formularioeditpregunta').hide();
                $('#how').hide();
                $('#selectfixexamasig').hide();
                $('#selectcursofixexamen').hide();
                $('#tablepreguntasexam').hide();
                $('#elrtfixedexam1').hide();
                $('#elrtfixedexam2').hide();
                $('#uploadfilesform').hide();
                $('#credencial').hide();
                $('#alerforupload').hide();

                $('a').click(function() {
                        $('a').removeClass('active');
                        $(this).addClass('active');

                        if ($(this).html() == "Asignaturas") {
                            $('#contselectprofe').show();
                            $('#tableasignaturas').hide();
                            $('#createasignatura').hide();
                            $('#selectcursopregunt').hide();
                            $('#selectasig').hide();
                            $('#formulariopreguntas').hide();
                            $('#alertpregunta').hide();
                            $('#selecteditpreguncurs').hide();
                            $('#seleceditpregunasig').hide();
                            $('#tablepreguntas').hide();
                            $('#alertpreguntaedit').hide();
                            $('#formularioeditpregunta').hide();
                            $('#selectcursofixexamen').hide();
                            $('#selectfixexamasig').hide();
                            $('#tablepreguntasexam').hide();
                            $('#elrtfixedexam1').hide();
                            $('#elrtfixedexam2').hide();
                            $('#uploadfilesform').hide();
                            $('#alerforupload').hide();


                            $.get("../php/cursos.php", function(data, estado) {
                                if (estado == "success") {
                                    $('#selectcurso').empty();
                                    $('#selectcurso').append("<option selected='selected'>Seleccione Curso</option>")
                                    $.each(data, function(indice, valor) {
                                        $('#selectcurso').append("<option value='" + valor.COD_CURSO + "'>" + valor.COD_CURSO + "</option>")
                                    });
                                }
                            });

                            $('#selectcurso').change(function() {
                                var codigo = $(this).val();
                                $('#hiddenasig').val(codigo);

                                var datos = {
                                    "codigo": codigo
                                };

                                $.post("../php/asignaturas.php", datos, function(data, estado) {
                                    if (estado == "success") {
                                        $('#tableasignaturas').show();
                                        $('#tableasignaturas').children('tbody').empty();
                                        $.each(data, function(indice, valor) {
                                            $('#tableasignaturas').children('tbody').append("<tr><td>" + valor.COD_ASIGNATURA + "</td><td>" + valor.NOMBRE_ASIG + "</td><td><form action='../php/deletasig.php' method='post' id='eliminarasig'><input type='hidden' name='codigo' value='" + valor.COD_ASIGNATURA + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td><td></td></tr>")
                                        })

                                    }
                                });
                            });

                            $('body').on("submit", '#crearasig', function() {
                                event.preventDefault();
                                $.ajax({
                                    type: "POST",
                                    url: "../php/crearasignatura.php",
                                    data: $(this).serialize(),
                                    success: function(respuesta) {
                                        var codigo = $('#selectcurso').val();
                                        var datos = {
                                            "codigo": codigo
                                        };

                                        $.post("../php/asignaturas.php", datos, function(data, estado) {
                                            if (estado == "success") {
                                                $('#tableasignaturas').show();
                                                $('#tableasignaturas').children('tbody').empty();
                                                $.each(data, function(indice, valor) {
                                                    $('#tableasignaturas').children('tbody').append("<tr><td>" + valor.COD_ASIGNATURA + "</td><td>" + valor.NOMBRE_ASIG + "</td><td><form action='../php/deletasig.php' method='post' id='eliminarasig'><input type='hidden' name='codigo' value='" + valor.COD_ASIGNATURA + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td><td></td></tr>")
                                                })

                                            }
                                        });

                                        if (respuesta == 1) {

                                            $('#alertasig1').show();

                                        } else {

                                            $('#alertasig1').hide();
                                            $('#createasignatura').hide();
                                            $('#modalcrearasignatura').modal("hide");

                                        }
                                    }
                                });

                            })

                            $('body').on("submit", '#eliminarasig', function() {
                                event.preventDefault();
                                $.ajax({
                                    type: "POST",
                                    url: "../php/deleteasignatura.php",
                                    data: $(this).serialize(),
                                    success: function(respuesta) {
                                        var codigo = $('#selectcurso').val();
                                        var datos = {
                                            "codigo": codigo
                                        };

                                        $.post("../php/asignaturas.php", datos, function(data, estado) {
                                            if (estado == "success") {
                                                $('#tableasignaturas').show();
                                                $('#tableasignaturas').children('tbody').empty();
                                                $.each(data, function(indice, valor) {
                                                    $('#tableasignaturas').children('tbody').append("<tr><td>" + valor.COD_ASIGNATURA + "</td><td>" + valor.NOMBRE_ASIG + "</td><td><form action='../php/deletasig.php' method='post' id='eliminarasig'><input type='hidden' name='codigo' value='" + valor.COD_ASIGNATURA + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td><td></td></tr>")
                                                })
                                            }
                                        });
                                    }
                                });

                            })
                        } else if ($(this).html() == "Crear Pregunta") {
                            $('#contselectprofe').hide();
                            $('#selectcursopregunt').show();
                            $('#tableasignaturas').hide();
                            $('#alertpregunta').hide();
                            $('#selecteditpreguncurs').hide();
                            $('#seleceditpregunasig').hide();
                            $('#tablepreguntas').hide();
                            $('#createasignatura').hide();
                            $('#alertpreguntaedit').hide();
                            $('#formularioeditpregunta').hide();
                            $('#selectcursofixexamen').hide();
                            $('#selectfixexamasig').hide();
                            $('#tablepreguntasexam').hide();
                            $('#elrtfixedexam1').hide();
                            $('#elrtfixedexam2').hide();
                            $('#uploadfilesform').hide();
                            $('#alerforupload').hide();


                            $.get("../php/cursos.php", function(data, estado) {
                                if (estado == "success") {
                                    $('#selectcursopregun').empty();
                                    $('#selectcursopregun').append("<option selected='selected'>Seleccione Curso</option>");

                                    $.each(data, function(indice, valor) {
                                        $('#selectcursopregun').append("<option value='" + valor.COD_CURSO + "'>" + valor.COD_CURSO + "</option>")
                                    });

                                }
                            });

                            $('#selectcursopregun').change(function() {
                                $('#selectasig').show();
                                var codigo = $(this).val();
                                var datos = {
                                    "codigo": codigo
                                };

                                $.post("../php/asignaturas.php", datos, function(data, estado) {
                                    if (estado == "success") {

                                        $('#selectasigpregun').empty();
                                        $('#selectasigpregun').append("<option selected='selected'>Seleccione Asignatura</option>");


                                        $.each(data, function(indice, valor) {
                                            $('#selectasigpregun').append("<option value='" + valor.COD_ASIGNATURA + "'>" + valor.COD_ASIGNATURA + "</option>")
                                        })

                                    }
                                });

                                $('#selectasigpregun').change(function() {
                                    $('#formulariopreguntas').show();
                                    var codigo = $(this).val();
                                    var datos = {
                                        "codigo": codigo
                                    };
                                    $('#codigoasig').val(codigo)
                                });
                            })
                        } else if ($(this).html() == "Editar Pregunta") {
                            $('#contselectprofe').hide();
                            $('#tableasignaturas').hide();
                            $('#createasignatura').hide();
                            $('#selectcursopregunt').hide();
                            $('#selectasig').hide();
                            $('#formulariopreguntas').hide();
                            $('#alertpregunta').hide();
                            $('#seleceditpregunasig').hide();
                            $('#tablepreguntas').hide();
                            $('#alertpreguntaedit').hide();
                            $('#formularioeditpregunta').hide();
                            $('#selectcursofixexamen').hide();
                            $('#selectfixexamasig').hide();
                            $('#tablepreguntasexam').hide();
                            $('#elrtfixedexam1').hide();
                            $('#elrtfixedexam2').hide();
                            $('#uploadfilesform').hide();
                            $('#alerforupload').hide();

                            $('#selecteditpreguncurs').show();

                            $.get("../php/cursos.php", function(data, estado) {
                                if (estado == "success") {
                                    $('#selecteditpreguncurso').empty();
                                    $('#selecteditpreguncurso').append("<option selected='selected'>Seleccione Curso</option>");

                                    $.each(data, function(indice, valor) {
                                        $('#selecteditpreguncurso').append("<option value='" + valor.COD_CURSO + "'>" + valor.COD_CURSO + "</option>")
                                    });

                                }
                            });


                            $('#selecteditpreguncurso').change(function() {
                                $('#seleceditpregunasig').show();
                                $('#formulariopreguntasedit').hide();
                                $('#alertpreguntaedit').hide();
                                var codigo = $(this).val();
                                var datos = {
                                    "codigo": codigo
                                };

                                $.post("../php/asignaturas.php", datos, function(data, estado) {
                                    if (estado == "success") {

                                        $('#seleceditpregunasign').empty();
                                        $('#seleceditpregunasign').append("<option selected='selected'>Seleccione Asignatura</option>");

                                        $.each(data, function(indice, valor) {
                                            $('#seleceditpregunasign').append("<option value='" + valor.COD_ASIGNATURA + "'>" + valor.COD_ASIGNATURA + "</option>")
                                        })
                                    }
                                });
                            })

                            $('#seleceditpregunasign').change(function() {
                                $('#tablepreguntas').show();
                                $('#formulariopreguntasedit').hide();
                                $('#alertpreguntaedit').hide();
                                var codigo = $(this).val();
                                var datos = {
                                    "codigo": codigo
                                };

                                $.post("../php/questions.php", datos, function(data, estado) {
                                    if (estado == "success") {
                                        $('#tablepreguntas').children('tbody').empty();

                                        $.each(data, function(indice, valor) {
                                            $('#tablepreguntas').children('tbody').append("<tr><td>" + valor.ID_PREGUNTA + "</td><td>" + valor.TEXTO_P + "</td><td>" + valor.COD_ASIGNATURA + "</td><td><form action='../php/deletequestion.php' method='post' id='eliminarquestion'><input type='hidden' name='codigo' value='" + valor.ID_PREGUNTA + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td><td><form action='../php/getanswers.php' method='post' id='getrespuestas'><input type='hidden' name='codigo' value='" + valor.ID_PREGUNTA + "'><button type='submit' class='btn btn-primary ' id='editquestionbutton'>Editar</button></form></td></tr>");
                                        })

                                        $("#tablepreguntas").paginationTdA({
                                            elemPerPage: 10
                                        })
                                    }
                                })
                            })

                            $('body').on("submit", '#eliminarquestion', function() {
                                event.preventDefault();

                                $.ajax({
                                    type: "POST",
                                    url: "../php/deletequestion.php",
                                    data: $(this).serialize(),
                                    success: function(respuesta) {

                                        var codigo = $('#seleceditpregunasign').val();
                                        var datos = {
                                            "codigo": codigo
                                        };

                                        $.post("../php/questions.php", datos, function(data, estado) {
                                            if (estado == "success") {
                                                $('#tablepreguntas').children('tbody').empty();

                                                $.each(data, function(indice, valor) {
                                                    $('#tablepreguntas').children('tbody').append("<tr><td>" + valor.ID_PREGUNTA + "</td><td>" + valor.TEXTO_P + "</td><td>" + valor.COD_ASIGNATURA + "</td><td><form action='../php/deletequestion.php' method='post' id='eliminarquestion'><input type='hidden' name='codigo' value='" + valor.ID_PREGUNTA + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td><td><form action='../php/getanswers.php' method='post' id='getrespuestas'><input type='hidden' name='codigo' value='" + valor.ID_PREGUNTA + "'><button type='submit' class='btn btn-primary' id='editquestionbutton'>Editar</button></form></td></tr>");
                                                })
                                            }
                                        })
                                    }
                                });

                            })

                            $('body').on("click", '#editquestionbutton', function() {

                                $('#tablepreguntas').hide();
                                $('#formularioeditpregunta').show();
                                $('#formulariopreguntasedit').show();
                                $('#alertpreguntaedit').hide();

                                $('body').on("submit", '#getrespuestas', function() {
                                    event.preventDefault();

                                    $.ajax({
                                        type: "POST",
                                        url: "../php/getanswers.php",
                                        data: $(this).serialize(),
                                        success: function(respuesta) {
                                            console.log(respuesta)

                                            var contador = 1;
                                            $.each(respuesta, function(indice, valor) {
                                                $('#preguntaedit').val(valor.TEXTO_P);
                                                $('#codpreguntaedit').val(valor.ID_PREGUNTA)

                                                if (valor.CORRECTA == 'true') {
                                                    $("#radio" + contador).attr("checked", true);
                                                    $("#respuesta" + contador + "edit").val(valor.TEXTO_R)
                                                    $("#codrespuesta" + contador + "edit").val(valor.ID_RESPUESTA)
                                                    contador++
                                                } else {
                                                    $("#respuesta" + contador + "edit").val(valor.TEXTO_R)
                                                    $("#codrespuesta" + contador + "edit").val(valor.ID_RESPUESTA)
                                                    contador++
                                                }

                                            })
                                        }
                                    });
                                })
                            })
                            $('#formulariopreguntasedit').submit(function() {
                                event.preventDefault();


                                $.ajax({
                                    type: "POST",
                                    url: "../php/editquestion.php",
                                    data: $(this).serialize(),
                                    success: function(respuesta) {

                                        $('#formulariopreguntasedit').hide();
                                        $('#alertpreguntaedit').show();

                                    }
                                });
                            })
                        } else if ($(this).html() == "Fijar Exámen") {

                            $('#contselectprofe').hide();
                            $('#tableasignaturas').hide();
                            $('#createasignatura').hide();
                            $('#selectcursopregunt').hide();
                            $('#selectasig').hide();
                            $('#formulariopreguntas').hide();
                            $('#alertpregunta').hide();
                            $('#seleceditpregunasig').hide();
                            $('#tablepreguntas').hide();
                            $('#alertpreguntaedit').hide();
                            $('#formularioeditpregunta').hide();
                            $('#selecteditpreguncurs').hide();
                            $('#selectcursofixexamen').show();
                            $('#selectfixexamasig').hide();
                            $('#tablepreguntasexam').hide();
                            $('#elrtfixedexam1').hide();
                            $('#elrtfixedexam2').hide();
                            $('#uploadfilesform').hide();
                            $('#alerforupload').hide();

                            $.get("../php/cursos.php", function(data, estado) {
                                if (estado == "success") {
                                    $('#selectcursofixedexamen').empty();
                                    $('#selectcursofixedexamen').append("<option selected='selected'>Seleccione Curso</option>");

                                    $.each(data, function(indice, valor) {
                                        $('#selectcursofixedexamen').append("<option value='" + valor.COD_CURSO + "'>" + valor.COD_CURSO + "</option>")
                                    });

                                }
                            });

                            $('#selectcursofixedexamen').change(function() {
                                $('#selectfixexamasig').show();
                                $('#elrtfixedexam1').hide();
                                $('#tablepreguntasexam').hide();
                                $('#elrtfixedexam2').hide();
                                var codigo = $(this).val();
                                var datos = {
                                    "codigo": codigo
                                };

                                $.post("../php/asignaturas.php", datos, function(data, estado) {
                                    if (estado == "success") {

                                        $('#selectfixedexamasig').empty();
                                        $('#selectfixedexamasig').append("<option selected='selected'>Seleccione Asignatura</option>");

                                        $.each(data, function(indice, valor) {
                                            $('#selectfixedexamasig').append("<option value='" + valor.COD_ASIGNATURA + "'>" + valor.COD_ASIGNATURA + "</option>")
                                        })
                                    }
                                });
                            })

                            $('#selectfixedexamasig').change(function() {
                                $('#tablepreguntasexam').show();
                                $('#elrtfixedexam1').hide();
                                $('#elrtfixedexam2').hide();
                                var codigo = $(this).val();
                                $('#codasigfixex').val(codigo);
                                var datos = {
                                    "codigo": codigo
                                };

                                $.post("../php/questions.php", datos, function(data, estado) {
                                    if (estado == "success") {
                                        var contcheck = 0;
                                        $('#tablepreguntasexam').children('tbody').empty();

                                        $.each(data, function(indice, valor) {
                                            $('#tablepreguntasexam').children('tbody').append("<tr><td>" + valor.ID_PREGUNTA + "</td><td>" + valor.TEXTO_P + "</td><td><div class='custom-control custom-checkbox mr-sm-2'><input class='custom-control-input' type='checkbox' value='" + valor.ID_PREGUNTA + "' name='idpreguntas[]' id='customControlcheck"+contcheck+"'><label class='custom-control-label' for='customControlcheck"+contcheck+"'></label></div></td></tr>");
                                            contcheck++;
                                        })


                                    }
                                })
                            })


                            $('#formfixedexam').submit(function() {
                                event.preventDefault();

                                $.ajax({
                                    type: "POST",
                                    url: "../php/fixedexam.php",
                                    data: $(this).serialize(),
                                    success: function(respuesta) {
                                        $('#modalfixedexam').modal('hide');
                                        if (respuesta == 0) {
                                            $('#tablepreguntasexam').hide();
                                            $('#elrtfixedexam1').show();
                                            $('#elrtfixedexam2').hide();

                                        } else {
                                            $('#elrtfixedexam1').hide();
                                            $('#elrtfixedexam2').show();
                                        }
                                    }
                                })
                            })






                            //end of fixed exam
                        }else if($(this).html() == "Subir Fichero"){
                            $('#contselectprofe').hide();
                            $('#elrtfixedexam1').hide();
                                $('#elrtfixedexam2').hide();
                                $('#tablepreguntasexam').hide();
                                $('#selectcursopregunt').hide();
                                $('#selecteditpreguncurs').hide();
                                $('#selectcursofixexamen').hide();
                                $('#seleceditpregunasig').hide();
                                $('#selectasig').hide();
                                $('.table').hide();
                                $('#formulariopreguntas').hide();
                                $('#selectfixexamasig').hide();
                                $('#formularioeditpregunta').hide();

                            $.get("../php/cursos.php",function(data,estado){
                                if(estado=="success"){
                                    $('#selectcursoforupload').empty();
                                        $('#selectcursoforupload').append("<option selected='selected'>Seleccione Curso</option>");

                                    
                                   
                                    $.each(data,function(indice,valor){
                                        $('#selectcursoforupload').append("<option value='"+valor.COD_CURSO+"'>"+valor.COD_CURSO+"</option>")
                                    })
                                }
                            })

                            $('#selectcursoforupload').change(function(){
                                var codigo = $(this).val();
                                var datos = {"codigo": codigo};
                                console.log(codigo)
                                console.log(datos)

                                $.post("../php/asignaturas.php",datos,function(data,estado){
                                    if(estado=="success"){
                                        console.log('ok')
                                          $('#selectasigforupload').empty();
                                        $('#selectasigforupload').append("<option selected='selected'>Seleccione Asignatura</option>");
                                   
                                    $.each(data,function(indice,valor){
                                        $('#selectasigforupload').append("<option value='"+valor.COD_ASIGNATURA+"'>"+valor.COD_ASIGNATURA+"</option>")
                                    })
                                    }
                                })
                            })

                            $('#uploadfilesform').show();


                            $('#formupload').submit(function(){
                                // event.preventDefault();
                                $.ajax({
                                    type: "POST",
                                    url: "../php/editquestion.php",
                                    data: $(this).serialize(),
                                    success: function(respuesta) {

                                        $(location).attr("href", "index.html");
                                        // $('#uploadfilesform').hide();
                                        // $('#alerforupload').show();

                                        

                                    }
                                });


                            })

                        }//end uploadfiles 

                    }) //end of if opciones

                //###########################################################################################################################################
            } else if ($(this).html() == 'Alumno') {
                $('.home').hide();
                $('#listalumno').show();
                $('#listconfig').hide();
                $('#datosperfil').hide();
                $('#formpass').hide();
                $('#formularioexamen').hide();
                $('#alertnopreguntas').hide();
                $('#cardresultado').hide();
                $('#credencial').hide();
                $('#how').hide();
                $('#tablehistory').hide();
                $('#credencial').hide();



                $('a').click(function() {
                        $('a').removeClass('active');
                        $(this).addClass('active');

                        if ($(this).html() == "Hacer examen") {

                            $('#contselectprofe').show();
                            $('#alertnopreguntas').hide();
                            $('#cardresultado').hide();
                            $('#formularioexamen').hide();
                            $('#tablefixedexams').hide();
                            $('#tablehistory').hide();





                            $.get("../php/cursos.php", function(data, estado) {
                                if (estado == "success") {
                                    $('#selectcurso').empty();
                                    $('#selectcurso').append("<option selected='selected'>Seleccione Curso</option>")
                                    $.each(data, function(indice, valor) {
                                        $('#selectcurso').append("<option value='" + valor.COD_CURSO + "'>" + valor.COD_CURSO + "</option>")
                                    });
                                }
                            });

                            $('#selectcurso').change(function() {
                                var codigo = $(this).val();
                                $('#hiddenasig').val(codigo);

                                var datos = {
                                    "codigo": codigo
                                };

                                $.post("../php/asignaturas.php", datos, function(data, estado) {
                                    if (estado == "success") {
                                        $('#tableasignaturas').show();
                                        $('#botonnewasignatura').hide();
                                        $('#tableasignaturas').children('tbody').empty();
                                        $.each(data, function(indice, valor) {
                                            $('#tableasignaturas').children('tbody').append("<tr><td>" + valor.COD_ASIGNATURA + "</td><td>" + valor.NOMBRE_ASIG + "</td><td><form action='../php/getquestions.php' method='post' id='getquestions'><input type='hidden' name='codigo' value='" + valor.COD_ASIGNATURA + "'><button type='submit' class='btn btn-warning ml-5'>Examen Aleatorio</button></form></td><td><form action='../php/getfixedexams.php' method='post' id='getfixedexams'><input type='hidden' name='codigo' value='" + valor.COD_ASIGNATURA + "'><button type='submit' class='btn btn-success' id='viewfixedexams'>Mostrar Fijados</button></form></td></tr>")
                                        })

                                    }
                                });
                            });


                        } else if ($(this).html() == "Historia") {
                            $('#cardresultado').hide();

                            $('#contselectprofe').hide();
                            $('#tablehistory').show();
                            $('#formularioexamen').hide();
                            $('#tableasignaturas').hide();
                            $('#tablefixedexams').hide();

                            $.get("../php/gethistory.php", function(data, estado) {
                                console.log(data)

                                $('#tablehistory').children('tbody').empty()

                                $.each(data, function(indice, valor) {


                                    if (valor.APROBADO == "false") {


                                        $('#tablehistory').children('tbody').append("<tr class='table-danger'><td>" + valor.DESCRIPCION + "</td><td>" + valor.FECHA + "</td><td class='d-none d-md-table-cell'>" + valor.ACIERTOS + "</td><td class='d-none d-md-table-cell'>" + valor.ERRORES + "</td><td class='d-none d-md-table-cell'>" + valor.BLANCOS + "</td><td>Suspenso </td></tr>")

                                    } else {
                                        $('#tablehistory').children('tbody').append("<tr class='table-success'><td>" + valor.DESCRIPCION + "</td><td>" + valor.FECHA + "</td><td class='d-none d-md-table-cell'>" + valor.ACIERTOS + "</td><td class='d-none d-md-table-cell'>" + valor.ERRORES + "</td><td class='d-none d-md-table-cell'>" + valor.BLANCOS + "</td><td>Aprobado </td></tr>")
                                    }
                                })

                                 $("#tablehistory").paginationTdA({
                                            elemPerPage: 10
                                        })

                            })

                        } //end if historia ##############################################################
                    }) //end funcion click de a en menu alumno#############################################################################
            } else if ($(this).html() == 'Cómo Funciona') {

                $('#createcurso').hide();
                $('#listconfig').hide();
                $('#listadmin').hide();
                $('#listprofesor').hide();
                $('table').hide();
                $('.home').hide();
                $('#contselectprofe').hide();
                $('#selecteditpreguncurs').hide();
                $('#seleceditpregunasig').hide();
                $('#tablepreguntas').hide();
                $('#selectcursopregunt').hide();
                $('#alertpreguntaedit').hide();
                $('#formularioeditpregunta').hide();
                $('#createasignatura').hide();
                $('#selectasig').hide();
                $('#formulariopreguntas').hide();
                $('#datosperfil').hide();
                $('#formpass').hide();
                $('#listalumno').hide();
                $('#formularioexamen').hide();
                $('#alertnopreguntas').hide();
                $('#cardresultado').hide();
                $('#credencial').hide();
                $('#how').show();
                $('#tablehistory').hide();
                $('#uploadfilesform').hide();
                $('#alerforupload').hide();


            } else if ($(this).html() == "Configuración") {
                $('#contselectprofe').hide();
                $('#listadmin').hide();
                $('#selectfixexamasig').hide();
                $('#alerforupload').hide();
                $('#listprofesor').hide();
                $('.home').hide();
                $('#createcurso').hide();
                $('#listconfig').show();
                $('table').hide();
                $('#selecteditpreguncurs').hide();
                $('#seleceditpregunasig').hide();
                $('#tablepreguntas').hide();
                $('#selectcursopregunt').hide();
                $('#alertpreguntaedit').hide();
                $('#formularioeditpregunta').hide();
                $('#contselectprofe').hide();
                $('#createasignatura').hide();
                $('#selectasig').hide();
                $('#formulariopreguntas').hide();
                $('#listalumno').hide();
                $('#formularioexamen').hide();
                $('#alertnopreguntas').hide();
                $('#cardresultado').hide();
                $('#credencial').hide();
                $('#how').hide();
                $('#selectcursofixexamen').hide();
                $('#tablepreguntasexam').hide();
                $('#elrtfixedexam1').hide();
                $('#elrtfixedexam2').hide();
                $('#tablehistory').hide();
                $('#uploadfilesform').hide();


                $('a').click(function() {

                    $('a').removeClass('active')
                    $(this).addClass('active')


                    if ($(this).html() == 'Datos perfil') {
                        $('#cambiarpass').hide();
                        $('#alertedit').hide()
                        $('#datosperfil').show();
                        $('#credencial').hide();

                        $.get("../php/usuarioactive.php", function(data, estado) {
                            if (estado == 'success') {
                                var nomb = data;
                                var nombre = {
                                    "nombre": data
                                };

                                $.post("../php/perfiluser.php", nombre, function(data, estado) {
                                    if (estado == 'success') {

                                        $.each(data, function(indice, valor) {

                                            $('#username').val(nomb)
                                            $('#nomb').val(valor.NOMBRE)
                                            $('#ape1').val(valor.APELLIDO1)
                                            $('#ape2').val(valor.APELLIDO2)
                                            $('#dni').val(valor.DNI)
                                            $('#email').val(valor.EMAIL)


                                        })
                                    }
                                })
                            }
                        })

                        $('#formperfil').submit(function() {
                            event.preventDefault();
                            $.ajax({
                                type: "POST",
                                url: "../php/editperfil.php",
                                data: $("#formperfil").serialize(),
                                success: function(respuesta) {

                                    $('#alertedit').show()
                                    $('#formperfil').hide()

                                }
                            })
                        })

                    } else if ($(this).html() == 'Cambiar clave') {
                        $('#datosperfil').hide();
                        $('#editpass').hide();
                        $('#cambiarpass').show();
                        $('#formpass').show();
                        $('.alert').hide();
                        $('#credencial').hide();


                        $('#formpass').submit(function() {
                            event.preventDefault();
                            $.ajax({
                                type: "POST",
                                url: "../php/validpass.php",
                                data: $("#formpass").serialize(),
                                success: function(respuesta) {

                                    console.log(respuesta);

                                    if (respuesta == 1) {
                                        $('#alertpass').show();
                                    } else if (respuesta == 0) {
                                        $('#formpass').hide();
                                        $('#editpass').show();
                                    }
                                }
                            })
                        })

                        $('#editpass').submit(function() {
                            event.preventDefault();
                            var pass1 = $('#passnew').val();
                            var pass2 = $('#passrep').val();
                            if (pass1 != pass2) {
                                $('#alertpassedit').hide();
                                $('#alertequals').show();
                            } else {
                                $('#editpass').hide();
                                $('#alertequals').hide();
                                $('#alertpassedit').show();

                                $.ajax({
                                    type: "POST",
                                    url: "../php/editpass.php",
                                    data: $("#editpass").serialize(),
                                    success: function(respuesta) {

                                        console.log(cambiada)
                                    }
                                })
                            }
                        })
                    } else if ($(this).html() == 'Credencial') {
                        $('#datosperfil').hide();
                        $('#editpass').hide();
                        $('#cambiarpass').hide();
                        $('#formpass').hide();
                        $('.alert').hide();
                        $('#credencial').show();
                        var nombre = '';

                        $.get("../php/usuarioactive.php", function(data, estado) {
                            if (estado == "success") {
                                if (data != "null") {
                                    $('#credentialusername').val(data);
                                    nombre = data;
                                }
                            }
                        })

                        $('#formcredential').submit(function() {
                            event.preventDefault();

                            $.ajax({
                                type: "POST",
                                url: "../php/getpermissionsadmin.php",
                                data: $(this).serialize(),
                                success: function(respuesta) {

                                    if (respuesta == 1) {
                                        $('#alertcredencial').show();
                                        $('#alertcredencial2').hide();
                                    } else {
                                        $('#alertcredencial').hide();
                                        $('#alertcredencial2').show();
                                        $('#formcredential').hide();
                                    }
                                }
                            })

                        })

                    }
                })

                $('#deletaccountacept').click(function() {
                    $.get("../php/deleteuser.php", function(data, estado) {

                    })
                })
            }
        })

        $('body').on("submit", "#getquestions", function() {
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "../php/getquestions.php",
                data: $(this).serialize(),
                success: function(respuesta) {
                    $('#tableasignaturas').hide();
                    $('#contselectprofe').hide();
                    $('#contenidoexamen').empty()
                    if (respuesta != 0) {
                        //#################bucle numeros sin repetir ########################################
                        var cantidadpreguntas = Object.keys(respuesta).length;
                        var arraynumeros = [];
                        var numero = Math.floor(Math.random() * (cantidadpreguntas - 0))
                        arraynumeros.push(numero);
                        var arraycodpreguntas = [];
                        if (cantidadpreguntas > 20) {
                            while (arraynumeros.length < 20) {
                                var numero = Math.floor(Math.random() * (cantidadpreguntas - 0))
                                if (arraynumeros.includes(numero) == true) {
                                    var numero = Math.floor(Math.random() * (cantidadpreguntas - 0))
                                } else {
                                    arraynumeros.push(numero);
                                }
                            }
                        } else {
                            while (arraynumeros.length < cantidadpreguntas) {
                                var numero = Math.floor(Math.random() * (cantidadpreguntas - 0))

                                if (arraynumeros.includes(numero) == true) {
                                    var numero = Math.floor(Math.random() * (cantidadpreguntas - 0))
                                } else {
                                    arraynumeros.push(numero);
                                }
                            }
                        }
                        for (i = 0; i < arraynumeros.length; i++) {

                            arraycodpreguntas[i] = respuesta[arraynumeros[i]].ID_PREGUNTA
                        }
                        for (i = 0; i < arraycodpreguntas.length; i++) {
                            var cod = arraycodpreguntas[i];
                            var datos = {
                                "codigo": cod
                            }
                            $('#formularioexamen').show();
                            var veces = 0;
                            var contador = 1;
                            contador3 = 20;
                            $.post("../php/getdataquestion.php", datos, function(data, estado) {
                                if (estado == "success") {
                                    
                                    $.each(data, function(indice, valor) {
                                        var dato = {
                                            "codigo": valor.ID_PREGUNTA
                                        }
                                        $.post("../php/getanswers2.php", dato, function(data, estado) {
                                            if (estado == "success") {

                                                $('#idexamen').val(null)
                                                $('#contenidoexamen').append("<div class='form-group py-3 pl-2 bg-secondary'><label class='text-white'>" + contador + "- " + valor.TEXTO_P + "</label>")
                                                $.each(data, function(indice, valor) {
                                                    $('#contenidoexamen').append("<div class='custom-control custom-radio my-3'><input class='custom-control-input' id='radio" + contador3 + "' type='radio' name='radio" + contador + "' value='" + valor.ID_RESPUESTA + "'><label class='custom-control-label' for='radio" + contador3 + "'>" + valor.TEXTO_R + "</label></div>")
                                                    veces++;
                                                    contador3++;
                                                    $('#cantidadcamposexamen').val(contador)

                                                    if (veces % 4 == 0) {
                                                        contador++
                                                    }
                                                })
                                                $('#contenidoexamen').append("<hr>")
                                            }
                                        })
                                    })
                                }

                            })


                        }

                        //###################################################
                    } else if (respuesta == 0) {

                        $('#alertnopreguntas').show();
                    }
                }
            })
        });

        $('#formexamenaleatorio').submit(function() {
            event.preventDefault();
            var usuario = ""
            var idexamen = $('#idexamen').val()
            $.ajax({
                type: "POST",
                url: "../php/resultadoexamen.php",
                data: $(this).serialize(),
                success: function(respuesta) {
                    $('#formularioexamen').hide();
                    $('#cardresultado').show();
                    $('#aciertos').html("Aciertos: " + respuesta.aciertos);
                    $('#fallos').html("Fallos: " + respuesta.fallos);
                    $('#blancos').html("Blancos: " + respuesta.blancos);
                }
            })
        })


        $('body').on("submit", '#getfixedexams', function() {
            event.preventDefault();

            $.ajax({
                type: "POST",
                url: "../php/getfixedexams.php",
                data: $(this).serialize(),
                success: function(respuesta) {

                    $('#tableasignaturas').hide();
                    $('#contselectprofe').hide();

                    $('#tablefixedexams').show();

                    $('#tablefixedexams').children('tbody').empty();

                    $.each(respuesta, function(indice, valor) {
                        $('#tablefixedexams').children('tbody').append("<tr><td>" + valor.ID_ASIGNATURA + "</td><td>" + valor.DESCRIPCION + "</td><td><form action='../php/getquestionforexam.php' method='post' id='makefixedexam'><input type='hidden' name='codexam' value='" + valor.ID_EXAMEN + "' /><button type='submit' class='btn btn-warning  btn-block ml-auto'>Hacer</button></form></td></tr>");
                    })

                    $("#tablefixedexams").paginationTdA({
                                            elemPerPage: 10
                                        })
                }

            })

        })

        $('body').on("submit", "#makefixedexam", function() {
            event.preventDefault();


            $.ajax({
                type: "POST",
                url: "../php/getquestionforexam.php",
                data: $(this).serialize(),
                success: function(respuesta) {
                    $('#tablefixedexams').hide();
                    $('#formularioexamen').show();
                    $('#contenidoexamen').empty()

                    $.each(respuesta, function(indice, valor) {
                        datos = {
                            'codigo': valor.ID_PREGUNTA
                        }
                        $('#idexamen').val(valor.ID_EXAMEN);

                        numeroveces = 0;
                        numpregun = 1;
                        contidsfors = 20;
                        $.post("../php/getdataquestion.php", datos, function(data, estado) {
                            if (estado == 'success') {

                                
                                $.each(data, function(indice, valor) {

                                    var dato = {
                                        "codigo": valor.ID_PREGUNTA
                                    }
                                    $.post("../php/getanswers2.php", dato, function(data, estado) {
                                        if (estado == "success") {

                                            $('#contenidoexamen').append("<div class='form-group py-3 pl-2 bg-secondary'><label class='text-white'>" + numpregun + "- " + valor.TEXTO_P + "</label>")
                                            $.each(data, function(indice, valor) {

                                                $('#contenidoexamen').append("<div class='custom-control custom-radio my-3'><input class='custom-control-input' id='radio" + contidsfors + "' type='radio' name='radio" + numpregun + "' value='" + valor.ID_RESPUESTA + "'><label class='custom-control-label' for='radio" + contidsfors + "'>" + valor.TEXTO_R + "</label></div>")
                                                numeroveces++;
                                                contidsfors++;
                                                $('#cantidadcamposexamen').val(numpregun)

                                                if (numeroveces % 4 == 0) {
                                                    numpregun++
                                                }
                                            })
                                            $('#contenidoexamen').append("<hr>")
                                        }
                                    })
                                })

                            }
                        })
                    })



                }

            })

        })

        $("body").on("click", ":radio", function(e) {
            var radio = $(this);
            if (radio.is(".seleccionado")) {
                radio.prop("checked", false).removeClass("seleccionado");
                return;
            }
            $("input:radio[name='" + radio.prop("name") + "'].seleccionado").removeClass("seleccionado");
            radio.addClass("seleccionado");
        });

    }) //end of all