-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Maj 2021, 12:43
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `drony`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `imprezy`
--

CREATE TABLE `imprezy` (
  `ID` int(50) NOT NULL,
  `Nazwa` varchar(255) NOT NULL,
  `Miasto` varchar(255) NOT NULL,
  `Data` date NOT NULL,
  `Opis` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `imprezy`
--

INSERT INTO `imprezy` (`ID`, `Nazwa`, `Miasto`, `Data`, `Opis`) VALUES
(1, 'Dronowanie na wesoło', 'Płock', '2021-05-21', 'Latanie i piknik na lotnisku aeroklubu. Dla dzieci i dorosłych.'),
(2, 'FPV zawody latania na najwyższym poziomie', 'Warszawa', '2021-06-02', 'Ogólnopolskie zawody w lataniu dronami FPV'),
(3, 'Podniebne przygody', 'Włocławek', '2021-05-31', 'Kurs latania dla najmłodszych'),
(4, 'Nocne latanie', 'Bydgoszcz', '2021-07-13', 'Nocne latanie i pokaz świateł ');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `imprezy`
--
ALTER TABLE `imprezy`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `imprezy`
--
ALTER TABLE `imprezy`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
