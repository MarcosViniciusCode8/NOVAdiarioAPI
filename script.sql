CREATE DATABASE novadiario;
USE novadiario;

CREATE TABLE usuarios(
ID_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(200),
username VARCHAR(20) UNIQUE,
senha VARCHAR(40),
email VARCHAR(200) UNIQUE,
data_nascimento DATE,
permissao BOOLEAN,
imagem VARCHAR(800)
);

CREATE TABLE notas(
ID_nota INT PRIMARY KEY AUTO_INCREMENT,
ID_usuario INT,
cor ENUM('azul', 'rosa', 'amarelo', 'verde', 'lilas', 'pessego', 'menta', 'coral', 'bege', 'cinza', 'azul-lavanda'),titulo VARCHAR(60),	
texto TEXT,
data_criacao DATE DEFAULT (CURRENT_DATE),
favorita BOOLEAN,

FOREIGN KEY (ID_usuario) REFERENCES usuarios(ID_usuario)
);

CREATE TABLE textos_preferencias(
ID_texto INT PRIMARY KEY AUTO_INCREMENT,
ID_usuario INT,
preferencia VARCHAR(50),
FOREIGN KEY (ID_usuario) REFERENCES usuarios(ID_usuario)
);

-- Execute as consultas somente depois da criação das tabelas.
-- Para criar uma nota, use um ID_usuario existente nesta lista.
-- Na API, faça login com esse usuário para obter um token com o ID válido.
SELECT ID_usuario, nome, username FROM usuarios;
SELECT * FROM notas;

SELECT 
favorita,
titulo,
texto,
cor,
data_criacao
FROM notas
WHERE ID_usuario = 4
ORDER BY favorita DESC;


