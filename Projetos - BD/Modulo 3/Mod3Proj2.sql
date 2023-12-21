-- Modulo 3 - Projeto 2

-- Considere um banco de dados simples que armazena informações sobre livros e autores.

-- As tabelas relevantes são as seguintes:

-- 1. Tabela "Autores":
--      Colunas: AutorID (Chave Primária), Nome, Nacionalidade

-- 2. Tabela "Livros":
--      Colunas: LivroID (Chave Primária), Titulo, AnoPublicacao, AutorID (Chave Estrangeira referenciando Autores)

-- Instruções:
-- 1. Inserção de dados: insira alguns registros nas tabelas "Autores" e "Livros".
--      Certifique-se de que existam, pelo menos, três autores e cinco livros associados a esses autores;

-- 2. Consulta simples: realize uma consulta simples para listar todos os autores e seus livros associados;

-- 3. Consulta com junção INNER JOIN: crie uma consulta que utilize INNER JOIN para listar os detalhes dos livros e seus autores correspondentes;

-- 4. Consulta com junção LEFT JOIN: elabore uma consulta que utilize LEFT JOIN para exibir todos os autores, independentemente de terem livros associados. -- Inclua informações dos livros, se disponíveis;

-- 5. Consulta com filtro por nacionalidade: realize uma consulta que liste os autores e seus livros, mas restrinja os resultados apenas aos autores de uma nacionalidade específica;

-- 6. Consulta agregada: crie uma consulta que agregue dados para contar quantos livros cada autor escreveu.

-- Observações:
-- - utilize as chaves primárias e estrangeiras corretamente nas junções;
-- - documente cada consulta explicando o propósito e os resultados esperados;
-- - considere a importancia das juncoes para unir informaçoes de tabelas relacionadas e entender a interconexao dos dados.

-- Resolução --

-- Criação do banco de dados

CREATE DATABASE LivroseAutores;

USE LivroseAutores;

-- Criação da tabela "Autores"

CREATE TABLE Autores (
    AutorID INT PRIMARY KEY,
    Nome VARCHAR(100),
    Nacionalidade VARCHAR(50)
);

-- Criação da tabela "Livros"

CREATE TABLE Livros (
    LivroID INT PRIMARY KEY,
    Titulo VARCHAR(100),
    AnoPublicacao INT,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);

-- Inserção de dados na tabela "Autores"

INSERT INTO Autores (AutorID, Nome, Nacionalidade) VALUES
(1, 'Autor1', 'Nacionalidade1'),
(2, 'Autor2', 'Nacionalidade2'),
(3, 'Autor3', 'Nacionalidade3');

-- Inserção de dados na tabela "Livros"

INSERT INTO Livros (LivroID, Titulo, AnoPublicacao, AutorID) VALUES
(1, 'Livro1', 2020, 1),
(2, 'Livro2', 2018, 1),
(3, 'Livro3', 2019, 2),
(4, 'Livro4', 2021, 2),
(5, 'Livro5', 2022, 3);

-- Consulta simples para listar todos os autores e seus livros associados

SELECT Autores.Nome AS Autor, Livros.Titulo FROM Autores JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Consulta com INNER JOIN para listar detalhes dos livros e seus autores correspondentes

SELECT Autores.Nome AS Autor, Livros.Titulo, Livros.AnoPublicacao FROM Autores JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Consulta com LEFT JOIN para exibir todos os autores, independentemente de terem livros associados

SELECT Autores.Nome AS Autor, Livros.Titulo, Livros.AnoPublicacao FROM Autores LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Consulta com filtro por nacionalidade 

SELECT Autores.Nome AS Autor, Livros.Titulo FROM Autores JOIN Livros ON Autores.AutorID = Livros.AutorID WHERE Autores.Nacionalidade = 'Nacionalidade2';

-- Consulta agregada para contar quantos livros cada autor escreveu

SELECT Autores.Nome AS Autor, COUNT(Livros.LivroID) AS QuantidadeLivros FROM Autores LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID GROUP BY Autores.Nome;