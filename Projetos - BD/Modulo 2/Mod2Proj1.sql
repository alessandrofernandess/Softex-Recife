CREATE DATABASE BlogDB;
USE BlogDB;

CREATE TABLE Autor (
	AutorID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NomeDoAutor VARCHAR(100));

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