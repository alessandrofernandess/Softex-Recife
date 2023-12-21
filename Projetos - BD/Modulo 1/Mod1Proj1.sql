-- Modulo 1 - Projeto 1

-- Você foi contratado para projetar um sistema de gerenciamento de uma biblioteca. Ela precisa de um sistema para rastrear os seus livros, autores, usuários, empréstimos e as suas devoluções. 

-- Com base nisso, crie um Modelo Entidade-Relacionamento (MER) usando o BrModelo e identifique as entidades, os seus atributos e os seus relacionamentos. Alguns
-- exemplos de entidades podem ser: Livro, Autor, Usuário, Empréstimo, Devolução etc.

-- Crie os relacionamentos apropriados, como "Usuário faz Empréstimo" ou "Livro é escrito por Autor". Converta o MER em um Modelo Lógico, especificando os tipos de
-- dados dos atributos e criando chaves primárias e estrangeiras. 

-- Após isso, utilizando o MySQL Workbench, crie um Modelo Relacional com base no Modelo Lógico que você gerou no passo anterior. Elabore tabelas no banco de dados
-- para representar as entidades e os relacionamentos, definindo os campos e suas restrições. 

-- Ao terminar, envie o MER criado no BrModelo e o Modelo Relacional criado no MySQL Workbench

-- Resolução --

CREATE SCHEMA `Biblioteca`;

USE `Biblioteca`;

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