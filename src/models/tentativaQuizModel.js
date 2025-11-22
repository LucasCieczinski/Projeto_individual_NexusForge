var database = require("../database/config");

function registrarTentativas(resultado, tentativa, idUsuario, idQuiz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", resultado);
    
    var instrucaoSql = `INSERT INTO tentativa (idTentativa, fkQuiz, fkUsuario, resultado) VALUES ('${tentativa}', '${idQuiz}', '${idUsuario}', '${resultado}')`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adquirirResultados(idUsuario) {

    var instrucaoSql = `Select idTentativa as tentativa, resultado FROM tentativa WHERE fkUsuario = ${idUsuario}`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ranking() {

    var instrucaoSql = `SELECT * FROM view_ranking;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    registrarTentativas,
    adquirirResultados,
    ranking
};