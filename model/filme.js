class Filme extends Parse.Object {
    constructor(titulo, descricao, dataLancamento, imagem) {
      super("Filme");
      this.titulo = titulo;
      this.descricao = descricao;
      this.dataLancamento = dataLancamento;
      this.imagem = imagem;
    }
  
    setColum(filmes) {
      filmes.set("titulo", this.titulo);
      filmes.set("descricao", this.descricao);
      filmes.set("dataLancamento", this.dataLancamento);
      filmes.set("imagem", this.imagem);
    }
  }
  