const { v4: uuid4 } = require("uuid");

class Menu {
    constructor(nome, preco, quantidade) {
        this.id = uuid4()
        this.title = title;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

module.exports = Menu;