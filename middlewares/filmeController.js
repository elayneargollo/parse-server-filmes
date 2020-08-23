const { rejects } = require("assert");

const Parse = require("parse/node"),
  Filme = Parse.Object.extend("Filme"),
  fs = require("fs"),
  readline = require("readline");

exports.inserirListaFilmes = (jsonList) => {

  var msg = 'Salvo com sucesso'

  jsonList.forEach(function (filme) {

    inserirFilme(
      filme.titulo,
      filme.descricao,
      filme.dataLancamento,
      filme.imagem
    );
  });

  return msg;

}


/* Exibir lista de filme*/
exports.exibirFilme = async () => {
  var query = new Parse.Query(Filme);

  const results = await query.find();
  return results;

};


/* Buscar por buscar ou lancamento */
exports.buscarPorNomeOuLancamento = async (key, value) => {
  query = new Parse.Query("Filme");
  query.equalTo(key, value);

  const results = await query.find();
  return results;
};

var inserirFilme = async (titulo, descricao, dataLancamento, imagem) => {
  var filme = new Filme();

  filme.set("titulo", titulo);
  filme.set("descricao", descricao);
  filme.set("dataLancamento", dataLancamento);

  var filename = titulo + ".png";

  var file = new Parse.File(filename, { uri: imagem }, "image/png");

  filme.set("imagem", file);

  const results = await filme.save()
  return results;
};

