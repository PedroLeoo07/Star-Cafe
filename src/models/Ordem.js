const { v4: uuid4 } = require("uuid");

class Ordem{
        constructor( quantidade,item, preco, status = "Pendente") {
            this.id = uuid4();
            this.quantidade = quantidade;
            this.item = item;
            this.preco = preco;
            this.status = status;
    }
}

module.exports = Ordem;