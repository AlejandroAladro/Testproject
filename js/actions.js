$(document).ready(function() {

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
        $('#botonnewcurso').click(function() {
            $('#createcurso').toggle();
            $('#alercur1').hide();
        })

        $('#botonnewasignatura').click(function() {
            $('#createasignatura').toggle();
            $('#alertasig1').hide();
        })

        $('a').click(function() {

            if ($(this).html() == 'Administrar') {
                $('#listconfig').hide();
                $('#cambiarpass').hide();
                $('#datosperfil').hide();
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
                            console.log(data);
                            if (estado == "success") {
                                $('#tableusers').children('tbody').empty();

                                $.each(data, function(indice, valor) {
                                    if (valor.TIPO == 'PROFESOR') {
                                        $('tbody').append("<tr><td>" + valor.USERNAME + "</td><td class='d-none d-md-table-cell'>" + valor.DNI + "</td><td class='d-none d-md-table-cell'>" + valor.EMAIL + "</td><td><form action='../php/edituser.php' method='post'><select name='tipo'><option value='ALUMNO'>ALUMNO</option><option value='ADMIN'>ADMIN</option><option selected>" + valor.TIPO + "</option></select><input type='hidden' name='usuario' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-primary ml-1 ml-md-5' data-toggle='modal' data-target='#modaltransition'>Editar</button></form></td></tr>");
                                    } else if (valor.TIPO == 'ADMIN') {
                                        $('tbody').append("<tr><td>" + valor.USERNAME + "</td><td class='d-none d-md-table-cell'>" + valor.DNI + "</td><td class='d-none d-md-table-cell'>" + valor.EMAIL + "</td><td><form action='../php/edituser.php' method='post'><select name='tipo'><option value='ALUMNO'>ALUMNO</option><option value='PROFESOR'>PROFESOR</option><option selected>" + valor.TIPO + "</option></select><input type='hidden' name='usuario' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-primary ml-1 ml-md-5' data-toggle='modal' data-target='#modaltransition'>Editar</button></form></td></tr>");
                                    } else if (valor.TIPO == 'ALUMNO') {
                                        $('tbody').append("<tr><td>" + valor.USERNAME + "</td><td class='d-none d-md-table-cell'>" + valor.DNI + "</td><td class='d-none d-md-table-cell'>" + valor.EMAIL + "</td><td><form action='../php/edituser.php' method='post'><select name='tipo'><option value='PROFESOR'>PROFESOR</option><option value='ADMIN'>ADMIN</option><option selected>" + valor.TIPO + "</option></select><input type='hidden' name='usuario' value='" + valor.USERNAME + "'><button type='submit' class='btn btn-primary ml-1 ml-md-5' data-toggle='modal' data-target='#modaltransition'>Editar</button></form></td></tr>");
                                    }
                                })
                            }
                        })

                        $('body').on("submit", 'form', function() {
                            event.preventDefault();

                            $.ajax({
                                type: "POST",
                                url: "../php/edituser.php",
                                data: $(this).serialize(),
                                success: function(respuesta) {
                                }
                            })
                        })

                    } else if ($(this).html() == 'Cursos') {

                        $('.home').hide();
                        $('#createcurso').hide();
                        $('#tableusers').hide();
                        $('#tablecursos').show();
                        

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
                                        $('#tableasignaturas').children('tbody').append("<tr><td>" + valor.COD_ASIGNATURA + "</td><td>" + valor.NOMBRE_ASIG + "</td><td><form action='../php/deletasig.php' method='post' id='eliminarasig'><input type='hidden' name='codigo' value='" + valor.COD_ASIGNATURA + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td></tr>")
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
                                                $('#tableasignaturas').children('tbody').append("<tr><td>" + valor.COD_ASIGNATURA + "</td><td>" + valor.NOMBRE_ASIG + "</td><td><form action='../php/deletasig.php' method='post' id='eliminarasig'><input type='hidden' name='codigo' value='" + valor.COD_ASIGNATURA + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td></tr>")
                                            })

                                        }
                                    });

                                    if (respuesta == 1) {

                                        $('#alertasig1').show();

                                    } else {

                                        $('#alertasig1').hide();
                                        $('#createasignatura').hide();

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
                                                $('#tableasignaturas').children('tbody').append("<tr><td>" + valor.COD_ASIGNATURA + "</td><td>" + valor.NOMBRE_ASIG + "</td><td><form action='../php/deletasig.php' method='post' id='eliminarasig'><input type='hidden' name='codigo' value='" + valor.COD_ASIGNATURA + "'><button type='submit' class='btn btn-danger ml-5'><i class='fas fa-trash-alt'></i></button></form></td></tr>")
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
                    } //ende else id editar pregunta
                })

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


                $('a').click(function() {
                        $('a').removeClass('active');
                        $(this).addClass('active');

                        if ($(this).html() == "Hacer examen") {

                            $('#contselectprofe').show();
                            $('#alertnopreguntas').hide();
                            $('#cardresultado').hide();
                            $('#formularioexamen').hide();

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
                                        $('#tableasignaturas').children('tfoot').hide();
                                        $('#tableasignaturas').children('tbody').empty();
                                        $.each(data, function(indice, valor) {
                                            $('#tableasignaturas').children('tbody').append("<tr><td>" + valor.COD_ASIGNATURA + "</td><td>" + valor.NOMBRE_ASIG + "</td><td><form action='../php/getquestions.php' method='post' id='getquestions'><input type='hidden' name='codigo' value='" + valor.COD_ASIGNATURA + "'><button type='submit' class='btn btn-warning ml-5'>Examen Aleatorio</button></form></td><td><button type='submit' class='btn btn-success'>Mostrar Fijados</button></td></tr>")
                                        })

                                    }
                                });
                            });


                        } //end if hacer examen ##############################################################
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

            } else if ($(this).html() == "Configuración") {
                $('#contselectprofe').hide();
                $('#listadmin').hide();
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
                    }else if ($(this).html() == 'Credencial'){
                        $('#datosperfil').hide();
                        $('#editpass').hide();
                        $('#cambiarpass').hide();
                        $('#formpass').hide();
                        $('.alert').hide();
                        $('#credencial').show();
                        var nombre ='';

                        $.get("../php/usuarioactive.php",function(data,estado){
                            if(estado=="success"){
                                if(data != "null"){
                                    $('#credentialusername').val(data);
                                    nombre = data;
                                }
                            }
                        })

                        $('#formcredential').submit(function(){
                            event.preventDefault();

                            $.ajax({
                                    type: "POST",
                                    url: "../php/getpermissionsadmin.php",
                                    data: $(this).serialize(),
                                    success: function(respuesta) {

                                        if(respuesta == 1){
                                            $('#alertcredencial').show();
                                            $('#alertcredencial2').hide();
                                        }else{
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
                            $.post("../php/getdataquestion.php", datos, function(data, estado) {
                                if (estado == "success") {
                                    $.each(data, function(indice, valor) {
                                        var dato = {
                                            "codigo": valor.ID_PREGUNTA
                                        }
                                        $.post("../php/getanswers2.php", dato, function(data, estado) {
                                            if (estado == "success") {
                                                
                                                $('#contenidoexamen').append("<div class='form-group mt-3'><label>-" + valor.TEXTO_P + "</label>")
                                                $.each(data, function(indice, valor) {
                                                    $('#contenidoexamen').append("<div class='form-check my-3'><input class='form-check-input' type='radio' name='radio" + contador + "' value='" + valor.ID_RESPUESTA + "'><label class='form-check-label'>" + valor.TEXTO_R + "</label></div>")
                                                    veces++;
                                                     $('#cantidadcamposexamen').val(contador)

                                                    if (veces % 4 == 0) {
                                                        contador++
                                                    }
                                                })
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

        $.ajax({
            type: "POST",
            url: "../php/resultadoexamen.php",
            data: $(this).serialize(),
            success: function(respuesta) {
            		

            	$('#formularioexamen').hide();
            	$('#cardresultado').show();
            	
            		$('#aciertos').html("Aciertos: "+respuesta.aciertos);
            		$('#fallos').html("Fallos: "+respuesta.fallos);
            		$('#blancos').html("Blancos: "+respuesta.blancos);
            	
            		
            	
            	
            }

        })
    })

}) //end of all