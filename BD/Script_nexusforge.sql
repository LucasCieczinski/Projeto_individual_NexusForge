CREATE DATABASE NexusForge;
USE NexusForge;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50) NOT NULL UNIQUE,
riotAccount VARCHAR(16) NOT NULL,
riotTag VARCHAR(5) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(20) NOT NULL,
dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
qtdPergunta INT,
descricao VARCHAR(100)
);

INSERT INTO quiz (qtdPergunta, descricao) VALUES
	(10, 'Quiz de personalidade sobre League of Legends, o quiz aponta qual a melhor lane para o usuario jogar');
    

CREATE TABLE tentativa (
idTentativa INT,
fkUsuario INT,
fkQuiz INT,
resultado VARCHAR(10),
tempo TIME,
	CONSTRAINT fkUsuario
		FOREIGN KEY (fkUsuario)
			REFERENCES usuario(idUsuario),
	CONSTRAINT fkQuiz
		FOREIGN KEY (fkQuiz)
			REFERENCES quiz(idQuiz),
	CONSTRAINT pkComposta PRIMARY KEY (fkUsuario, fkQuiz, idTentativa)
);

INSERT INTO tentativa (idTentativa, fkQuiz, fkUsuario, resultado, tempo) VALUES
	(1, 1, 1, 'Jungle', '00:01:10'),
    (2, 1, 1, 'Suporte', '00:01:30'),
    (1, 1, 6, 'Top', '00:20:00');
    
SELECT Max(idTentativa) FROM tentativa
	WHERE fkUsuario = 1;
    
select * from tentativa;
    
SELECT * FROM usuario;

CREATE VIEW view_ranking AS
SELECT resultado, COUNT(*) AS total
FROM tentativa
GROUP BY resultado
ORDER BY total DESC;





