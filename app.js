/* Configurando servidor Parse */

/* Declaração das variáveis */
const express = require("express"),
  ParseServer = require("parse-server").ParseServer,
  app = express(),
  httpServer = require("http").createServer(app),
  mountPath = "/parse",
  port = 1337,
  cors = require('cors'),
  Parse = require("parse/node");

  var filme = require('./controller/filme');

/* Inicializando Server */
Parse.initialize('oti8aU6ZyrIZITj74dAGgeIWSDbSRlFGzPJ4FcOD','4nGpdEh6NsIeRrXip0cvDywU7NRgm0yLB4c0CObJ');
Parse.serverURL = 'https://parse-dashboard.back4app.com';

/* Configuração do Parser */
var api = new ParseServer({
  databaseURI: "mongodb://localhost:27017/dev", /* Conexao com o banco de dados */
  cloud: __dirname + "/cloud/main.js", /* Caminho para o cloud*/
  appId: "myAppId", /* nome do meu app */
  masterKey: "1234", /* minha chave secreta */
  serverURL: "http://localhost:1337/parse",
  liveQuery: {
    classNames: ["Posts", "Comments"],
  },
});


app.use(express.static("public"));
app.use('/filme', filme);
app.use(mountPath, api);
app.use(cors());

httpServer.listen(port, function() {
  console.log("parse-server-example running on port " + port + ".");
});

ParseServer.createLiveQueryServer(httpServer);

