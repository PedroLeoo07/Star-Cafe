class OrdemList {
    constructor() {
        this.ordens = [];
    }
    addOrdem(ordem){
        this.ordens.push(ordem);
    }
    getAllOrdens(){
        return this.ordens;
    }

    getOrdemById(id) {
        return this.ordens.find(ordem => ordem.id === id);
        if (ordem) {
            throw new error ("Pedido não encontrado");
        }
        return ordem;
    }

    deleteOrdem(id) {
        this.ordens = this.ordens.filter(ordem => ordem.id !== id);
    }
}

module.exports = OrdemList;