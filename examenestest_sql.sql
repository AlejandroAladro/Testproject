-- phpMyAdmin SQL Dump
-- version 4.7.8
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 22-04-2019 a las 16:52:22
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
  `ID_EXAMEN` int(3) NOT NULL,
  `ID_USER` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

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
(24, 'wgeegergergaerge rgardgadrgerggggggggg gggggg ggggggggg gggggggg gggggggg gggggggggggg ggggggggggggggggggggggg ggggggggg ggggggggg ggggggggggggggg', 'BDD');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntasofrexam`
--

CREATE TABLE `preguntasofrexam` (
  `ID_EXAMEN` int(3) NOT NULL,
  `ID_PREGUNTA` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

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
(87, 22, 'muy mal', 'true'),
(88, 22, 'bien', 'false'),
(89, 23, 'muy bien', 'false'),
(90, 23, 'mal', 'true'),
(91, 23, 'muy mal', 'false'),
(92, 23, 'bien', 'false'),
(93, 24, 'gergeaqgergergergerukuykfy uru kryukuyky ky uyk ky k \r\n ki kk \r\n \r\n ik i k iykryuj mu \r\n \r\n \r\n \r\n u jrujujrujrujugergergergergergergergergergergergergerrrrrrrrrrrrrrrrrrrrrrrgerggw43t2', 'true'),
(94, 24, 'ergergergqagergeqrgheghhrtwhrthgbadfsgbertgheqrgeqrgeqrgergerqgerg', 'false'),
(95, 24, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'false'),
(96, 24, 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjtyjetyjrhjwhy6w4t5w 5 gewr gewrg    rtwhrtrt hrth rrth hy ythwty htyh h h r hwrjjwrrhjw r', 'false');

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
(12, 'Admin', 'admin', 'admin', '45263321l', 'admin@gmail.com', 'admin', '$2y$10$dGeBIZ1xXm.nNwulyjJO5epxcRCsSbWPDzC8UGOBFtaRnayqB6DbS', 'ADMIN'),
(14, 'profesor', 'profe', 'profe', '21052025h', 'profesor@gmail.com', 'profesor', '$2y$10$tr6GIbtFchckkS0fhjDPRuJyPaQ68/HuPbE3KR/RWZ8nlC4gO0XMq', 'PROFESOR'),
(15, 'Alumno', 'alumno', 'alumno', '21058863t', 'alumno@gmail.com', 'alumno', '$2y$10$hNjZ8CMzxQ0G3RpGDP1Qae9uzDG4xRlkvZKGzxTNNVgHVosy7nq3q', 'ALUMNO'),
(16, 'prueba', 'prueba', 'prueba', '99945858l', 'prueba@gmail.com', 'prueba', '$2y$10$6jP6UucTQO8cVPRs4RjuIeZlZ9ocqUMCYbypwl71cONZjuAwvujvO', 'ALUMNO'),
(25, 'pruebavideo', 'pruebavideo', 'pruebavideo', '88889888p', 'pruebavideo@gmail.com', 'pruebavideo', '$2y$10$Ibga4jL4bNGQkPbLs7gF8er2nLEZmMqWCUwoKmgnlRW1xjToO1RLa', 'ALUMNO'),
(26, 'pruebavideoo', 'pruebavideoo', 'pruebavideoo', '55026589p', 'pruebavideo2tyufgiku@gmail.com', 'pruebavideoo', '$2y$10$VOixclNBd0OUjiv0fBU.h.0sP484b6lHXRWNrRpmhGyDYn3sPP.Zu', 'ADMIN');

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
  ADD KEY `fk_userid` (`ID_USER`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`ID_PREGUNTA`),
  ADD KEY `FK_COD_ASIG` (`COD_ASIGNATURA`);

--
-- Indices de la tabla `preguntasofrexam`
--
ALTER TABLE `preguntasofrexam`
  ADD PRIMARY KEY (`ID_EXAMEN`,`ID_PREGUNTA`) USING BTREE,
  ADD KEY `FK_PREGUNTA_ID_PFE` (`ID_PREGUNTA`);

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
  MODIFY `ID_EXAMEN` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `ID_PREGUNTA` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `ID_RESPUESTA` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
  ADD CONSTRAINT `fk_userid` FOREIGN KEY (`ID_USER`) REFERENCES `usuario` (`ID_USER`);

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `FK_COD_ASIG` FOREIGN KEY (`COD_ASIGNATURA`) REFERENCES `asignatura` (`COD_ASIGNATURA`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `preguntasofrexam`
--
ALTER TABLE `preguntasofrexam`
  ADD CONSTRAINT `FK_EXAMEN_ID_PFE` FOREIGN KEY (`ID_EXAMEN`) REFERENCES `examen` (`ID_EXAMEN`),
  ADD CONSTRAINT `FK_PREGUNTA_ID_PFE` FOREIGN KEY (`ID_PREGUNTA`) REFERENCES `pregunta` (`ID_PREGUNTA`);

--
-- Filtros para la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `FK_ID_PREGUNTA` FOREIGN KEY (`ID_PREGUNTA`) REFERENCES `pregunta` (`ID_PREGUNTA`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
