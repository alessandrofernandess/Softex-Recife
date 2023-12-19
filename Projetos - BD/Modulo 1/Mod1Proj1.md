CREATE SCHEMA `Biblioteca`;

USE `Biblioteca` ;

CREATE TABLE Autor (
  `Id_Autor` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(100) NULL,
  PRIMARY KEY (`Id_Autor`));

CREATE TABLE Livro (
  `Id_Livro` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(100) NULL,
  `Categoria` VARCHAR(45) NULL,
  `Isbn` VARCHAR(11) NULL,
  `Autor_Id_Autor` INT NOT NULL,
  PRIMARY KEY (`Id_Livro`));

CREATE TABLE Usuario (
  `Id_Usuario` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(100) NULL,
  `Cpf` VARCHAR(11) NULL,
  `Telefone` VARCHAR(11) NULL,
  `Logradouro` VARCHAR(100) NULL,
  `Numero` INT NULL,
  `Bairro` VARCHAR(50) NULL,
  PRIMARY KEY (`Id_Usuario`))

CREATE TABLE Aluguel (
  `Id_Aluguel` INT NOT NULL AUTO_INCREMENT,
  `Data_Hora` DATETIME NULL,
  `Livro_Id_Livro` INT NOT NULL,
  `Usuario_Id_Usuario` INT NOT NULL,
  PRIMARY KEY (`Id_Aluguel`));

CREATE TABLE Devolucao (
  `Id_Devolucao` INT NOT NULL AUTO_INCREMENT,
  `Data_Hora` DATETIME NULL,
  `Usuario_Id_Usuario` INT NOT NULL,
  `Livro_Id_Livro` INT NOT NULL,
  PRIMARY KEY (`Id_Devolucao`));