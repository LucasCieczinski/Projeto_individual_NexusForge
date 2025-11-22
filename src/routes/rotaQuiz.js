var express = require("express");
var router = express.Router();

var tentativaQuizController = require("../controllers/tentativaQuizController");

router.post("/registrarTentativa", function (req, res) {
    tentativaQuizController.registrarTentativa(req, res);
})

router.get("/adquirirResultados/:idUsuario", function (req, res) {
    tentativaQuizController.adquirirResultados(req, res);
})

router.get("/ranking", function (req, res) {
    tentativaQuizController.ranking(req, res);
})

module.exports = router;