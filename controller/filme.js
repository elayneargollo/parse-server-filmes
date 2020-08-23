var express = require ('express');
var middlewares = require ("../middlewares/filmeController.js");
fs = require("fs");
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Requisicao enviada ... ');
    next();
});

router.get('/', (req,res,next) => {
    res.sendFile("index.html");
});


router.get("/exibir", async (req,res,next) => {
    var exibirfilme = await middlewares.exibirFilme();
    res.json(exibirfilme);
});

router.get("/buscarPorNomeOuLancamento", async (req,res,next) =>{
    var buscarPorNomeOuLancamento = await middlewares.buscarPorNomeOuLancamento('titulo','The Dark Knight');
    res.json(buscarPorNomeOuLancamento);
});

router.get("/inserirListaFilmes",  (req,res,next) => {
    const arquivoConfig = JSON.parse(fs.readFileSync("./test/app_test.json"));

    let jsonFile = fs.readFileSync(arquivoConfig.arquivoLista);
    var inserirListaFilmes = middlewares.inserirListaFilmes(JSON.parse(jsonFile));
    res.status(200).send(inserirListaFilmes)
});


module.exports=router;