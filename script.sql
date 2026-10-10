CREATE DATABASE novadiario;
USE novadiario;

CREATE TABLE usuarios(
ID_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(200),
username VARCHAR(20),
senha VARCHAR(40),
data_nascimento DATE,
permissao BOOLEAN,
imagem VARCHAR(800)
);

CREATE TABLE notas(
ID_nota INT PRIMARY KEY AUTO_INCREMENT,
ID_usuario INT,
cor VARCHAR(100),
titulo VARCHAR(60),
texto TEXT,

FOREIGN KEY (ID_usuario) REFERENCES usuarios(ID_usuario)
);

CREATE TABLE textos_preferencias(
ID_texto INT PRIMARY KEY AUTO_INCREMENT,
ID_usuario INT,
preferencia VARCHAR(50),

FOREIGN KEY (ID_usuario) REFERENCES usuarios(ID_usuario)
);

