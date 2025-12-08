USE NexusForge;

SHOW TABLES;
DESC usuario;
DESC tentativa;
DESC quiz;


-- Selects Tabela usuario
SELECT * FROM usuario;

UPDATE usuario SET riotAccount = 'PNG Gorlith' WHERE idUsuario = 5;
UPDATE usuario SET riotTag = 'PAIN' WHERE idUsuario = 5;

-- Selects Tabela quiz
SELECT * FROM quiz;

-- Selects Tabela tentativa
SELECT * FROM tentativa;
SELECT resultado FROM tentativa;


Select idTentativa as tentativa, resultado FROM tentativa WHERE fkUsuario = 2;

SELECT resultado, COUNT(*) AS total
FROM tentativa
GROUP BY resultado
ORDER BY total DESC;

SELECT * FROM view_ranking;