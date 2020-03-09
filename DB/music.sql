-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 09-03-2020 a las 17:23:47
-- Versión del servidor: 5.7.29-0ubuntu0.18.04.1
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `music`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img`
--

CREATE TABLE `img` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `type` varchar(20) NOT NULL,
  `rute` char(60) DEFAULT NULL,
  `views` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `img`
--

INSERT INTO `img` (`id`, `name`, `type`, `rute`, `views`) VALUES
(1, '', 'carousel', 'view/img/carousel1.jpg', 0),
(2, '', 'carousel', 'view/img/carousel2.png', 0),
(3, '', 'carousel', 'view/img/carousel3.png', 0),
(4, '', 'carousel', 'view/img/carousel4.png', 0),
(5, '', 'carousel', 'view/img/carousel5.jpg', 0),
(6, '', 'carousel', 'view/img/carousel6.jpg', 0),
(7, '', 'carousel', 'view/img/carousel7.jpg', 0),
(8, '', 'carousel', 'view/img/carousel8.jpg', 0),
(10, 'POPULAR MUSIC', 'categories', 'view/img/categories1.jpg', 25),
(11, 'POPULAR SPAIN', 'categories', 'view/img/categories2.jpg', 6),
(14, 'RECOMMEND', 'categories', 'view/img/categories3.jpg', 35),
(15, 'PREMIUM', 'premium', 'view/img/premium.png', 0),
(17, 'FAMILY', 'premium', 'view/img/family.png', 0),
(18, 'STUDENT', 'premium', 'view/img/student.png', 0),
(19, 'NEWER', 'categories', 'view/img/categories4.jpg', 1),
(20, 'MORE LISTENED', 'categories', 'view/img/categories5.jpg', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `map`
--

CREATE TABLE `map` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lat` varchar(30) NOT NULL,
  `lng` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `map`
--

INSERT INTO `map` (`id`, `name`, `lat`, `lng`) VALUES
(1, 'concert1', '38.905081', '-0.544696'),
(2, 'concert2', '38.822001', '-0.606689'),
(3, 'concert3', '38.992628', '-0.516578'),
(4, 'concert4', '38.984400', '-0.161807');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `premium`
--

CREATE TABLE `premium` (
  `name` varchar(40) NOT NULL,
  `users` varchar(11) NOT NULL,
  `price` varchar(11) NOT NULL,
  `id` int(11) NOT NULL,
  `id_img` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `premium`
--

INSERT INTO `premium` (`name`, `users`, `price`, `id`, `id_img`) VALUES
('Family', '6', '15', 1, 17),
('Premium', '1', '9', 2, 15),
('Student', '1', '5', 3, 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `id_song` varchar(4) DEFAULT NULL,
  `song_name` varchar(100) DEFAULT NULL,
  `singer` varchar(100) DEFAULT NULL,
  `album` varchar(100) DEFAULT NULL,
  `relase_date` varchar(100) DEFAULT NULL,
  `genre` varchar(100) NOT NULL,
  `duration` varchar(5) NOT NULL,
  `playlists` varchar(100) NOT NULL,
  `id_img` varchar(5) DEFAULT NULL,
  `views` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `songs`
--

INSERT INTO `songs` (`id`, `id_song`, `song_name`, `singer`, `album`, `relase_date`, `genre`, `duration`, `playlists`, `id_img`, `views`) VALUES
(112, 'A01', 'Test', 'Me', 'Tester', '07/01/2020', 'Rock:Pop:', '3:00', '10', '1', 1),
(113, 'A02', 'ProgrammerLife', 'LilXero', 'DAW', '07/01/2020', 'Pop:Blues:', '1:30', '10', '2', 8),
(121, 'A10', 'test10', 'test', 'test', '27/01/2020', 'Rock:', '1:43', '11', '3', 0),
(127, 'A99', 'uihi', 'hi', 'kjb', '29/01/2020', 'Blues:', '1:53', '14', '4', 0),
(128, 'M02', 'check', 'me', 'test', '27/02/2020', 'Rock:Pop:', '3:25', '11', '5', 0),
(131, 'B01', 'checkdel', 'test1', 'del', '27/02/2020', 'Rock:Pop:', '4:37', '10', '6', 0),
(132, 'M03', 'TestM', 'Me', 'Test', '27/02/2020', 'Pop:', '3:35', '10', '7', 0),
(133, 'M65', 'test', 'test', 'test', '27/02/2020', 'Rock:Pop:', '4:49', '10', '8', 0),
(134, 'C01', 'categoriestest', 'categories', 'test', '27/02/2020', 'Rock:Pop:', '2:28', '10', '', 0),
(135, 'A55', 'est', 'yguy', 'guy', '09/03/2020', 'Rock:', '2:10', '10', NULL, 0),
(136, 'T43', 'LOL', 'MarcTorres', 'LOL', '31/03/2020', 'Blues:', '2:51', '19', NULL, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `map`
--
ALTER TABLE `map`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `premium`
--
ALTER TABLE `premium`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_song` (`id_song`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `img`
--
ALTER TABLE `img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT de la tabla `map`
--
ALTER TABLE `map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `premium`
--
ALTER TABLE `premium`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
