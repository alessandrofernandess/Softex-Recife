-- Modulo 2 - Projeto 2

-- Você é o gerente de uma loja de eletrônicos e deseja utilizar um banco de dados para rastrear o estoque de seus produtos.
-- Para isso, você precisa executar várias ações de gerenciamento no banco de dados da loja. 

-- Nesse caso, a tabela de banco de dados disponível é: Produtos
 
-- Colunas: ProdutoID (Chave Primária), Nome do Produto, Preço, Quantidade em Estoque.

-- Crie os seguintes comandos para inserção e manipulação de dados, partindo do pressuposto de que os de criação da tabela já foram criados. 

-- Eles são: 

-- 1. inserção de produtos (INSERT): insira três novos produtos na tabela "Produtos" com os seguintes dados:

-- - produto 1: Nome - "Smartphone", Preço - 799.99, Quantidade - 20 unidades em estoque; 

-- - produto 2: Nome - "Tablet", Preço - 349.99, Quantidade - 10 unidades em estoque; 

-- - produto 3: Nome - "Fone de Ouvido", Preço - 49.99, Quantidade - 50 unidades em estoque. 

-- 2. atualização de estoque (UPDATE): atualize o estoque do "Smartphone" para 25 unidades e o preço para 849.99 na tabela "Produtos."

-- 3. venda de produtos (DELETE): simule a venda de cinco unidades do "Tablet" e dez unidades do "fone de ouvido"

-- Atualize o estoque na tabela "Produtos" de acordo com as vendas.

-- Resolução --

-- Criação do Banco de Dados

CREATE DATABASE Loja;

USE Loja;

-- Criação da Tabela Produtos

CREATE TABLE Produtos (
    ProdutoID INT PRIMARY KEY AUTO_INCREMENT,
    NomeDoProduto VARCHAR(255) NOT NULL,
    Preco DECIMAL(10, 2) NOT NULL,
    QuantidadeEmEstoque INT NOT NULL
);

-- Inserção de produtos

INSERT INTO Produtos (NomeDoProduto, Preco, QuantidadeEmEstoque) 
VALUES 
('Smartphone', 799.99, 20),
('Tablet', 349.99, 10),
('Fone de Ouvido', 49.99, 50);

-- Atualização de estoque e preço do Smartphone

UPDATE Produtos SET QuantidadeEmEstoque = 25, Preco = 849.99 WHERE NomeDoProduto = 'Smartphone';

-- Venda de produtos e atualização de estoque

DELETE FROM Produtos WHERE NomeDoProduto = 'Tablet' LIMIT 5;

DELETE FROM Produtos WHERE NomeDoProduto = 'Fone de Ouvido' LIMIT 10;
