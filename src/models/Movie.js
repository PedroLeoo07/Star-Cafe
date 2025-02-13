const { v4: uuid4 } = require("uuid")

class Movie {
    constructor(title, diretor, distribuicao, lancamento) {
        this.id = uuid4()
        this.title = title
        this.diretor = diretor
        this.distribuicao = distribuicao
        this.lancamento = lancamento
    }
}

module.exports = Movie;