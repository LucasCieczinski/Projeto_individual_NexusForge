var tentativaQuizModel = require("../models/tentativaQuizModel");


function registrarTentativa(req, res){
    var resultado = req.body.resultadoLane;
    var tentativa = req.body.tentativa;
    var idUsuario = req.body.idUsuario;
    var idQuiz = req.body.idQuiz;

    if (resultado == undefined){
        res.status(400).send("Resultado está undefined");
    }else if (tentativa == undefined){
        res.status(400).send("tentativa está undefined");
    }else if (idUsuario == undefined){
        res.status(400).send("idUsuario está undefined");
    }else if (idQuiz == undefined){
        res.status(400).send("idQuiz está undefined");
    }else {
        tentativaQuizModel.registrarTentativas(resultado, tentativa, idUsuario, idQuiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function adquirirResultados(req, res){
    var idUsuario = req.params.idUsuario;

    tentativaQuizModel.adquirirResultados(idUsuario).then((resultado) => {
        if(resultado.length > 0){
            res.status(200).send(resultado)
        }else {
            res.status(204).json([]);
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Erro ao adquirir dados", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}


function ranking(req, res){

    tentativaQuizModel.ranking().then((resultado) => {
        if(resultado.length > 0){
            res.status(200).send(resultado)
        }else {
            res.status(204).json([]);
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Erro ao adquirir dados", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}





module.exports = {
    registrarTentativa,
    adquirirResultados,
    ranking
}