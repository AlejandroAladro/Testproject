﻿-- phpMyAdmin SQL Dump
-- version 4.7.8
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-06-2019 a las 17:54:44
-- Versión del servidor: 5.7.19
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `examenestest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

CREATE TABLE `asignatura` (
  `COD_ASIGNATURA` varchar(5) COLLATE utf16_spanish_ci NOT NULL,
  `COD_CURSO` varchar(5) COLLATE utf16_spanish_ci NOT NULL,
  `NOMBRE_ASIG` varchar(100) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`COD_ASIGNATURA`, `COD_CURSO`, `NOMBRE_ASIG`) VALUES
('BDD', '1ºDAW', 'Bases de Datos'),
('DAW', '2DAW', 'Despliegue de aplicaciones informáticas'),
('DEC', '2DAW', 'Desarrollo entorno cliente'),
('DIW', '2DAW', 'Desarrollo de interfaces web'),
('DWES', '2DAW', 'Desarrollo web entorno servidor'),
('ED', '1ºDAW', 'Entornos de desarrollo'),
('FOL', '1ºDAW', 'Formación y orientación laboral'),
('LM', '1ºDAW', 'Lenguaje de marcas'),
('PROG', '1ºDAW', 'Iniciacion a la Programación');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `COD_CURSO` varchar(5) COLLATE utf16_spanish_ci NOT NULL,
  `NOMBRE_CURSO` varchar(100) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`COD_CURSO`, `NOMBRE_CURSO`) VALUES
('1ºDAW', 'Desarrollo de palicaciones web'),
('1SMR', 'Sistemas microinformáticos y redes'),
('2DAW', 'Desarrollo de aplicaciones web');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examen`
--

CREATE TABLE `examen` (
  `ID_EXAMEN` int(10) NOT NULL,
  `ID_ASIGNATURA` varchar(5) COLLATE utf16_spanish_ci NOT NULL,
  `DESCRIPCION` varchar(500) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `examen`
--

INSERT INTO `examen` (`ID_EXAMEN`, `ID_ASIGNATURA`, `DESCRIPCION`) VALUES
(1, 'BDD', 'Examen Prueba fijar'),
(2, 'BDD', 'Prueba 2 fijando examen'),
(3, 'BDD', 'prueba 3 fijar exmen'),
(4, 'BDD', 'hoy dos preugntas'),
(5, 'BDD', 'cambiando la base de datos'),
(6, 'BDD', 'probando base de datos 2'),
(7, 'BDD', 'The Final Exam'),
(8, 'BDD', 'Full all'),
(9, 'BDD', 'HELLOOO'),
(10, 'BDD', 'examen fijado 4 preguntas'),
(11, 'BDD', 'examen fijado 11 preguntas'),
(12, 'BDD', '12/06/2019'),
(13, 'DIW', '5 12/06/2019'),
(14, 'BDD', 'manolito'),
(15, 'BDD', '5 preguntas nuevas junio 12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fixedexams`
--

CREATE TABLE `fixedexams` (
  `ID_EXAMEN` int(11) NOT NULL,
  `ID_PREGUNTA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `fixedexams`
--

INSERT INTO `fixedexams` (`ID_EXAMEN`, `ID_PREGUNTA`) VALUES
(1, 25),
(1, 26),
(1, 27),
(2, 22),
(2, 23),
(2, 24),
(2, 25),
(2, 26),
(2, 27),
(3, 22),
(3, 23),
(4, 27),
(4, 28),
(5, 28),
(6, 27),
(6, 28),
(7, 26),
(7, 27),
(7, 28),
(7, 29),
(8, 25),
(8, 26),
(8, 28),
(8, 29),
(8, 30),
(9, 30),
(9, 31),
(9, 32),
(10, 27),
(10, 28),
(10, 29),
(10, 30),
(11, 22),
(11, 23),
(11, 24),
(11, 25),
(11, 26),
(11, 27),
(11, 28),
(11, 29),
(11, 30),
(11, 31),
(11, 32),
(12, 22),
(12, 23),
(13, 1),
(13, 2),
(13, 3),
(13, 4),
(13, 5),
(14, 32),
(14, 33),
(15, 31),
(15, 32),
(15, 33),
(15, 34),
(15, 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historiaalumno`
--

CREATE TABLE `historiaalumno` (
  `ID_HISTORIA` int(11) NOT NULL,
  `USERNAME` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `ID_EXAMEN` int(10) NOT NULL,
  `FECHA` date NOT NULL,
  `ERRORES` int(2) NOT NULL,
  `ACIERTOS` int(2) NOT NULL,
  `BLANCOS` int(2) NOT NULL,
  `APROBADO` enum('true','false') COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `historiaalumno`
--

INSERT INTO `historiaalumno` (`ID_HISTORIA`, `USERNAME`, `ID_EXAMEN`, `FECHA`, `ERRORES`, `ACIERTOS`, `BLANCOS`, `APROBADO`) VALUES
(46, 'alumno', 1, '2019-05-06', 2, 1, 0, 'false'),
(47, 'alumno', 1, '2019-05-06', 2, 1, 0, 'false'),
(48, 'alumno', 3, '2019-05-06', 2, 0, 0, 'false'),
(49, 'alumno', 1, '2019-05-06', 0, 3, 0, 'true'),
(50, 'alumno', 2, '2019-05-06', 3, 2, 1, 'false'),
(51, 'alumno', 4, '2019-05-16', 0, 0, 2, 'false'),
(52, 'alumno', 4, '2019-05-16', 0, 1, 1, 'true'),
(53, 'alumno', 1, '2019-05-16', 0, 2, 1, 'true'),
(54, 'alumno', 5, '2019-05-16', 0, 1, 0, 'true'),
(55, 'alumno', 6, '2019-05-16', 1, 1, 0, 'true'),
(56, 'alumno', 7, '2019-05-16', 1, 2, 1, 'true'),
(57, 'alumno', 7, '2019-05-16', 1, 1, 2, 'false'),
(58, 'alumno', 8, '2019-05-16', 0, 5, 0, 'true'),
(59, 'alumno', 2, '2019-05-16', 3, 2, 1, 'false'),
(60, 'alumno', 3, '2019-05-16', 0, 0, 2, 'false'),
(61, 'pepito', 8, '2019-05-20', 1, 4, 0, 'true'),
(62, 'pepito', 2, '2019-05-20', 0, 1, 5, 'false'),
(63, 'pepito', 5, '2019-05-20', 0, 1, 0, 'true'),
(64, 'pepito', 3, '2019-05-20', 2, 0, 0, 'false'),
(65, 'pepito', 1, '2019-05-20', 2, 1, 0, 'false'),
(66, 'pepito', 1, '2019-05-20', 0, 0, 3, 'false'),
(67, 'pepito', 4, '2019-05-20', 2, 0, 0, 'false'),
(68, 'pepito', 8, '2019-05-20', 0, 1, 4, 'false'),
(69, 'pepito', 3, '2019-05-20', 2, 0, 0, 'false'),
(70, 'pepito', 2, '2019-05-20', 2, 3, 1, 'true'),
(71, 'pepito', 3, '2019-05-20', 2, 0, 0, 'false'),
(72, 'pepito', 8, '2019-05-20', 0, 4, 1, 'true'),
(73, 'pepito', 9, '2019-05-20', 1, 2, 0, 'true'),
(74, 'alumno', 1, '2019-05-20', 2, 1, 0, 'false'),
(75, 'alumno', 3, '2019-05-21', 1, 1, 0, 'true'),
(76, 'alumno', 1, '2019-05-21', 2, 1, 0, 'false'),
(77, 'alumno', 5, '2019-05-21', 0, 1, 0, 'true'),
(78, 'alumno', 3, '2019-05-26', 2, 0, 0, 'false'),
(79, 'alumno', 11, '2019-05-26', 4, 7, 0, 'true'),
(80, 'alumno', 1, '2019-06-03', 1, 1, 1, 'false'),
(81, 'alumno', 1, '2019-06-03', 2, 0, 1, 'false'),
(82, 'alumno', 1, '2019-06-03', 1, 1, 1, 'false'),
(83, 'alumno', 4, '2019-06-03', 2, 0, 0, 'false'),
(84, 'alumno', 11, '2019-06-08', 10, 1, 0, 'false'),
(85, 'alumno', 12, '2019-06-12', 2, 0, 0, 'false'),
(86, 'alumno', 2, '2019-06-12', 3, 3, 0, 'true'),
(87, 'alumno', 13, '2019-06-12', 5, 0, 0, 'false'),
(88, 'alumno', 14, '2019-06-12', 1, 1, 0, 'true'),
(89, 'alumno', 15, '2019-06-12', 2, 3, 0, 'true'),
(90, 'alumno', 15, '2019-06-12', 2, 3, 0, 'true');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `ID_PREGUNTA` int(5) NOT NULL,
  `TEXTO_P` varchar(2000) COLLATE utf16_spanish_ci NOT NULL,
  `COD_ASIGNATURA` varchar(5) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`ID_PREGUNTA`, `TEXTO_P`, `COD_ASIGNATURA`) VALUES
(1, '1', 'DIW'),
(2, '2', 'DIW'),
(3, '3', 'DIW'),
(4, '4', 'DIW'),
(5, '5', 'DIW'),
(6, '6', 'DIW'),
(7, '7', 'DIW'),
(8, '8', 'DIW'),
(9, '9', 'DIW'),
(10, '10', 'DIW'),
(11, '11', 'DIW'),
(12, '12', 'DIW'),
(13, '13', 'DIW'),
(14, '14', 'DIW'),
(15, '15', 'DIW'),
(16, '16', 'DIW'),
(17, '17', 'DIW'),
(18, '18', 'DIW'),
(19, '19', 'DIW'),
(20, '20', 'DIW'),
(21, '21', 'DIW'),
(22, 'Hola Que tal?', 'BDD'),
(23, 'Hola Que tal?Hola Que tal?Hola Que tal?', 'BDD'),
(24, 'wgeegergergaerge rgardgadrgerggggggggg gggggg ggggggggg gggggggg gggggggg gggggggggggg ggggggggggggggggggggggg ggggggggg ggggggggg ggggggggggggggg', 'BDD'),
(25, 'Cual Es la capital de España?', 'BDD'),
(26, 'hola german', 'BDD'),
(27, 'con texarea pregunta', 'BDD'),
(28, '¿Como caga el burro?', 'BDD'),
(29, 'base cambiada', 'BDD'),
(30, 'Prueba Full all', 'BDD'),
(31, 'rthsrthsrthrt', 'BDD'),
(32, 'rthsrthsrthrt', 'BDD'),
(33, 'hola soy manolito', 'BDD'),
(34, 'que fue lo que paso?', 'BDD'),
(35, 'cuantos años tienes?', 'BDD');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE `respuesta` (
  `ID_RESPUESTA` int(5) NOT NULL,
  `ID_PREGUNTA` int(5) NOT NULL,
  `TEXTO_R` varchar(2000) COLLATE utf16_spanish_ci NOT NULL,
  `CORRECTA` enum('true','false') COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `respuesta`
--

INSERT INTO `respuesta` (`ID_RESPUESTA`, `ID_PREGUNTA`, `TEXTO_R`, `CORRECTA`) VALUES
(1, 1, '1', 'false'),
(2, 1, '1', 'false'),
(3, 1, '1', 'true'),
(4, 1, '1', 'false'),
(5, 2, '2', 'false'),
(6, 2, '2', 'true'),
(7, 2, '2', 'false'),
(8, 2, '2', 'false'),
(9, 3, '3', 'true'),
(10, 3, '3', 'false'),
(11, 3, '3', 'false'),
(12, 3, '3', 'false'),
(13, 4, '4', 'true'),
(14, 4, '4', 'false'),
(15, 4, '4', 'false'),
(16, 4, '4', 'false'),
(17, 5, '5', 'false'),
(18, 5, '5', 'false'),
(19, 5, '5', 'false'),
(20, 5, '5', 'true'),
(21, 6, '6', 'false'),
(22, 6, '6', 'false'),
(23, 6, '6', 'false'),
(24, 6, '6', 'true'),
(25, 7, '7', 'false'),
(26, 7, '7', 'false'),
(27, 7, '7', 'false'),
(28, 7, '7', 'true'),
(29, 8, '8', 'false'),
(30, 8, '8', 'false'),
(31, 8, '8', 'true'),
(32, 8, '8', 'false'),
(33, 9, '9', 'false'),
(34, 9, '9', 'true'),
(35, 9, '9', 'false'),
(36, 9, '9', 'false'),
(37, 10, '10', 'true'),
(38, 10, '10', 'false'),
(39, 10, '10', 'false'),
(40, 10, '10', 'false'),
(41, 11, '11', 'false'),
(42, 11, '11', 'false'),
(43, 11, '11', 'false'),
(44, 11, '11', 'true'),
(45, 12, '12', 'false'),
(46, 12, '12', 'false'),
(47, 12, '12', 'true'),
(48, 12, '12', 'false'),
(49, 13, '13', 'false'),
(50, 13, '13', 'true'),
(51, 13, '13', 'false'),
(52, 13, '13', 'false'),
(53, 14, '14', 'true'),
(54, 14, '14', 'false'),
(55, 14, '14', 'false'),
(56, 14, '14', 'false'),
(57, 15, '15', 'false'),
(58, 15, '15', 'false'),
(59, 15, '15', 'false'),
(60, 15, '15', 'true'),
(61, 16, '16', 'false'),
(62, 16, '16', 'true'),
(63, 16, '16', 'false'),
(64, 16, '16', 'false'),
(65, 17, '17', 'true'),
(66, 17, '17', 'false'),
(67, 17, '17', 'false'),
(68, 17, '17', 'false'),
(69, 18, '19', 'false'),
(70, 18, '19', 'false'),
(71, 18, '19', 'true'),
(72, 18, '19', 'false'),
(73, 19, '20', 'false'),
(74, 19, '20', 'false'),
(75, 19, '20', 'true'),
(76, 19, '20', 'false'),
(77, 20, '21', 'true'),
(78, 20, '21', 'false'),
(79, 20, '21', 'false'),
(80, 20, '21', 'false'),
(81, 21, '21', 'true'),
(82, 21, '21', 'false'),
(83, 21, '21', 'false'),
(84, 21, '21', 'false'),
(85, 22, 'muy bien', 'false'),
(86, 22, 'mal', 'false'),
(87, 22, 'espectacular', 'true'),
(88, 22, 'bien', 'false'),
(89, 23, 'muy bien', 'false'),
(90, 23, 'mal', 'true'),
(91, 23, 'muy mal', 'false'),
(92, 23, 'bien', 'false'),
(93, 24, 'gergeaqgergergergerukuykfy uru kryukuyky ky uyk ky k \r\n ki kk \r\n \r\n ik i k iykryuj mu \r\n \r\n \r\n \r\n u jrujujrujrujugergergergergergergergergergergergergerrrrrrrrrrrrrrrrrrrrrrrgerggw43t2', 'true'),
(94, 24, 'ergergergqagergeqrgheghhrtwhrthgbadfsgbertgheqrgeqrgeqrgergerqgerg', 'false'),
(95, 24, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'false'),
(96, 24, 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjtyjetyjrhjwhy6w4t5w 5 gewr gewrg    rtwhrtrt hrth rrth hy ythwty htyh h h r hwrjjwrrhjw r', 'false'),
(97, 25, 'Madrid', 'true'),
(98, 25, 'Barcelona', 'false'),
(99, 25, 'Oviedo', 'false'),
(100, 25, 'san Sebastian', 'false'),
(101, 26, 'hola', 'false'),
(102, 26, 'gol', 'false'),
(103, 26, 'lol', 'false'),
(104, 26, '12345678', 'true'),
(105, 27, 'prueba texarea1', 'false'),
(106, 27, 'prueba texarea2', 'true'),
(107, 27, 'prueba texarea3', 'false'),
(108, 27, 'prueba texarea4', 'false'),
(109, 28, 'cudrado', 'false'),
(110, 28, 'redondo', 'false'),
(111, 28, 'amarillo', 'true'),
(112, 28, 'triangular', 'false'),
(113, 29, 'base cambiada 1', 'false'),
(114, 29, 'base cambiada 2', 'false'),
(115, 29, 'base cambiada 3', 'true'),
(116, 29, 'base cambiada 4', 'false'),
(117, 30, 'Prueba Full all 1', 'false'),
(118, 30, 'Prueba Full all 2', 'false'),
(119, 30, 'Prueba Full all 3', 'false'),
(120, 30, 'correcta full ', 'true'),
(121, 31, 'hrthrth', 'true'),
(122, 31, 'rthrthrth', 'false'),
(123, 31, 'rthrth', 'false'),
(124, 31, 'rthrthrthhrth', 'false'),
(125, 32, 'hrthrth', 'false'),
(126, 32, 'rthrthrth', 'false'),
(127, 32, 'rthrth', 'true'),
(128, 32, 'rthrthrthhrth', 'false'),
(129, 33, 'gg', 'true'),
(130, 33, 'nn', 'false'),
(131, 33, 'll', 'false'),
(132, 33, 'hh', 'false'),
(133, 34, 'nn', 'false'),
(134, 34, 'mm', 'false'),
(135, 34, 'gg', 'true'),
(136, 34, 'll', 'false'),
(137, 35, 'nn', 'false'),
(138, 35, 'gg', 'false'),
(139, 35, 'mm', 'true'),
(140, 35, 'll', 'false');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID_USER` int(11) NOT NULL,
  `NOMBRE` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `APELLIDO1` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `APELLIDO2` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `DNI` varchar(9) COLLATE utf16_spanish_ci NOT NULL,
  `EMAIL` varchar(300) COLLATE utf16_spanish_ci NOT NULL,
  `USERNAME` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `PASSWORD` varchar(500) COLLATE utf16_spanish_ci NOT NULL,
  `TIPO` enum('PROFESOR','ALUMNO','ADMIN') COLLATE utf16_spanish_ci NOT NULL DEFAULT 'ALUMNO'
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID_USER`, `NOMBRE`, `APELLIDO1`, `APELLIDO2`, `DNI`, `EMAIL`, `USERNAME`, `PASSWORD`, `TIPO`) VALUES
(12, 'Admin', 'admin', 'admin', '45263321H', 'admin@gmail.com', 'admin', '$2y$10$dGeBIZ1xXm.nNwulyjJO5epxcRCsSbWPDzC8UGOBFtaRnayqB6DbS', 'ADMIN'),
(14, 'profesor', 'profe', 'profe', '21052025h', 'profesor@gmail.com', 'profesor', '$2y$10$tr6GIbtFchckkS0fhjDPRuJyPaQ68/HuPbE3KR/RWZ8nlC4gO0XMq', 'PROFESOR'),
(15, 'Alumno', 'alumno', 'alumno', '21058863t', 'alumno@gmail.com', 'alumno', '$2y$10$hNjZ8CMzxQ0G3RpGDP1Qae9uzDG4xRlkvZKGzxTNNVgHVosy7nq3q', 'ALUMNO'),
(26, 'pepito', 'pepito', 'pepito', '55026589p', 'pepito@gtmail.com', 'pepito', '$2y$10$wEUNtwZjQD./N222d8ZZ0uhOpeWCDUaNn5OM48sgUo3n8qhLXGuPa', 'ADMIN'),
(28, 'Alejandro', 'Aladro', 'Gonzalez', '21090036w', 'alejandroaladrogonzalez@gmail.com', 'Aaldro', '$2y$10$lgal5pFRazyLU7XXuIE3qOFS9jcK98d3KXo/RfTKxRV7OlWcGd3MK', 'ALUMNO'),
(33, 'Alejandro', 'Aladro', 'Gonzalez', '21090036w', 'alejandroaladrogonzalez2@gmail.com', 'prueba', '$2y$10$9kGSfajwFHgXLJPAsKPnL.e9BABxP7XMep3fNYKM9IRkCA0ieOK1q', 'ALUMNO'),
(34, 'prueba', 'prueba', 'prueba', '21090036w', 'prueba2@gmail.com', 'prueba2', '$2y$10$d/UTRq.i2Iv/USxjOrIS8uuMcz9vTfm81mNHDcKhw/0sS8gugfsiO', 'ALUMNO');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD PRIMARY KEY (`COD_ASIGNATURA`),
  ADD KEY `FK_COD_CURSO` (`COD_CURSO`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`COD_CURSO`);

--
-- Indices de la tabla `examen`
--
ALTER TABLE `examen`
  ADD PRIMARY KEY (`ID_EXAMEN`),
  ADD KEY `FK_ID_ASIG_EX` (`ID_ASIGNATURA`);

--
-- Indices de la tabla `fixedexams`
--
ALTER TABLE `fixedexams`
  ADD KEY `FK_ID_PREGUNTA_EX` (`ID_PREGUNTA`),
  ADD KEY `fk_idexamen` (`ID_EXAMEN`);

--
-- Indices de la tabla `historiaalumno`
--
ALTER TABLE `historiaalumno`
  ADD PRIMARY KEY (`ID_HISTORIA`),
  ADD KEY `fk_historia_user` (`USERNAME`),
  ADD KEY `fk_¨historia_examen` (`ID_EXAMEN`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`ID_PREGUNTA`),
  ADD KEY `FK_COD_ASIG` (`COD_ASIGNATURA`);

--
-- Indices de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD PRIMARY KEY (`ID_RESPUESTA`),
  ADD KEY `FK_ID_PREGUNTA` (`ID_PREGUNTA`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID_USER`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`),
  ADD UNIQUE KEY `USERNAME` (`USERNAME`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `examen`
--
ALTER TABLE `examen`
  MODIFY `ID_EXAMEN` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `historiaalumno`
--
ALTER TABLE `historiaalumno`
  MODIFY `ID_HISTORIA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `ID_PREGUNTA` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `ID_RESPUESTA` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD CONSTRAINT `FK_COD_CURSO` FOREIGN KEY (`COD_CURSO`) REFERENCES `curso` (`COD_CURSO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `examen`
--
ALTER TABLE `examen`
  ADD CONSTRAINT `FK_ID_ASIG_EX` FOREIGN KEY (`ID_ASIGNATURA`) REFERENCES `asignatura` (`COD_ASIGNATURA`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `fixedexams`
--
ALTER TABLE `fixedexams`
  ADD CONSTRAINT `FK_ID_PREGUNTA_EX` FOREIGN KEY (`ID_PREGUNTA`) REFERENCES `pregunta` (`ID_PREGUNTA`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idexamen` FOREIGN KEY (`ID_EXAMEN`) REFERENCES `examen` (`ID_EXAMEN`);

--
-- Filtros para la tabla `historiaalumno`
--
ALTER TABLE `historiaalumno`
  ADD CONSTRAINT `fk_historia_user` FOREIGN KEY (`USERNAME`) REFERENCES `usuario` (`USERNAME`),
  ADD CONSTRAINT `fk_¨historia_examen` FOREIGN KEY (`ID_EXAMEN`) REFERENCES `examen` (`ID_EXAMEN`);

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `FK_COD_ASIG` FOREIGN KEY (`COD_ASIGNATURA`) REFERENCES `asignatura` (`COD_ASIGNATURA`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `FK_ID_PREGUNTA` FOREIGN KEY (`ID_PREGUNTA`) REFERENCES `pregunta` (`ID_PREGUNTA`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
