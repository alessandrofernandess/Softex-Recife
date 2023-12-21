-- Modulo 2 - Projeto 1

-- Você é um desenvolvedor de banco de dados encarregado de criar um banco de dados para um blog on-line. 
-- Ele deve conter informações sobre posts, autores e comentários.
-- Cada post é escrito por um autor e pode ter vários comentários. 

-- Tarefas: 

-- 1. Crie um banco de dados chamado "BlogDB."; 

-- 2. Crie as tabelas a seguir: 

-- a) "Post" - Colunas: PostID (Chave Primária), Título, Conteúdo, Data de Publicação, AutorID (Chave Estrangeira para a tabela Autor).
-- b) "Autor" - Colunas: AutorID (Chave Primária), Nome do Autor, E-mail.
-- c) "Comentario" - Colunas: ComentarioID (Chave Primária), Texto do Comentário, Data do Comentário, AutorID (Chave Estrangeira para a tabela Autor), 
-- PostID (Chave Estrangeira para a tabela Post).

-- 3. Defina a integridade referencial entre as tabelas, de acordo com as relações
-- descritas (um post é escrito por um autor, um autor pode escrever vários posts, um
-- post pode ter vários comentários, um comentário é escrito por um autor)

-- Resolução --

CREATE DATABASE BlogDB;

USE BlogDB;

CREATE TABLE Autor (
	AutorID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NomeDoAutor VARCHAR(100)
    Email VARCHAR(30));

CREATE TABLE Post (
	PostID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Autor_ID INT NOT NULL,
    Titulo VARCHAR(255),
    Conteudo VARCHAR(255),
    DataPublicacao DATE,
    FOREIGN KEY (Autor_ID) REFERENCES Autor(AutorID) ON DELETE CASCADE
);

CREATE TABLE Comentario (
	ComentarioID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Autor_ID INT NOT NULL,
    Titulo VARCHAR(255),
    TextoDoComentario VARCHAR(255),
    DataDoComentario DATE,
    FOREIGN KEY (Autor_ID) REFERENCES Autor(AutorID) ON DELETE CASCADE 
);

INSERT INTO Autor (NomeDoAutor) VALUES ('Alessandro Fernandes'), ('Carolina Fernandes');

SELECT NomeDoAutor FROM Autor;

INSERT INTO Post (Autor_ID ,Titulo, Conteudo, DataPublicacao) 
VALUES (1, 'Titulo 1', 'Conteudo 1', '2023-01-28'), 
(2, 'Titulo 2', 'Conteudo 2', '2023-08-17');

SELECT * FROM Post;

SELECT A.AutorID, A.NomeDoAutor, P.Titulo, P.DataPublicacao
FROM Autor A
INNER JOIN Post P
ON A.AutorID = P.Autor_ID;

DELETE FROM Autor WHERE AutorID = 1;

SELECT * FROM Post;