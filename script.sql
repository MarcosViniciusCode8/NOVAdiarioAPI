CREATE DATABASE novadiario;
USE novadiario;


SELECT * FROM usuarios;
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

SELECT * FROM notas;

CREATE TABLE notas(
ID_nota INT PRIMARY KEY AUTO_INCREMENT,
ID_usuario INT,
cor ENUM('azul', 'vermelho', 'amarelo', 'verde', 'laranja', 'roxo', 'rosa', 'marrom', 'preto', 'branco', 'cinza'),
titulo VARCHAR(60),
texto TEXT,
data_criacao DATE DEFAULT (CURRENT_DATE),

FOREIGN KEY (ID_usuario) REFERENCES usuarios(ID_usuario)
);

CREATE TABLE textos_preferencias(
ID_texto INT PRIMARY KEY AUTO_INCREMENT,
ID_usuario INT,
preferencia VARCHAR(50),
FOREIGN KEY (ID_usuario) REFERENCES usuarios(ID_usuario)
);

