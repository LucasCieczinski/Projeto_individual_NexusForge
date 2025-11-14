var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log('1:', resultadoAutenticar);
                        console.log('2:', resultadoAutenticar[0]);

                       // res.status(200).send(resultadoAutenticar[0]);

                        aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].idUsuario)
                           .then((resultadoAquarios) => {
                               if (resultadoAquarios.length > 0) {
                                   res.json({
                                       idUsuario: resultadoAutenticar[0].idUsuario,
                                       email: resultadoAutenticar[0].email,
                                       username: resultadoAutenticar[0].username,
                                       senha: resultadoAutenticar[0].senha,
                                        riotAccount: resultadoAutenticar[0].riotAccount,
                                        riotTag: resultadoAutenticar[0].riotTag
                                    });
                               } else {
                                   res.status(204).json({ aquarios: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var username = req.body.usernameServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var riotAccount = req.body.riotAccount;
    var riotTag = req.body.riotTag;

    // Faça as validações dos valores
    if (username == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (riotAccount == undefined || riotTag == undefined) {
        res.status(400).send("Sua conta a vincular está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(username, email, senha, riotAccount, riotTag)
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

module.exports = {
    autenticar,
    cadastrar
}