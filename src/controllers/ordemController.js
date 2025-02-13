const OrdemList = require("../models/OrdemList");
const Ordem = require("../models/ordem");

const pedido = new OrdemList();

pedido.addOrdem(new Ordem(1, "Cappuccino", "R$5,00", "Preparando"));
pedido.addOrdem(new Ordem(1, "Misto Quente", "R$7,00", "Pendente"));

const router = {
    addOrdem: (req, res) => {
        try {
            const { nome, preco, quantidade} = req.body;
            if (! nome || !preco || ! quantidade) {
                throw new Error ("Preencha todos os campos para adicionar o seu pedido!")
            }
            const ordem = new Ordem (quantidade, preco, quantidade, "Pendennte")
            pedido.addOrdem(ordem);
            return res.status(201).json({ message: "Pedido adicionado com sucesso!!", ordem});
        }   catch (error) {
            res.status(400).json({ message: "Erro ao buscar pedidos", error})
        }
    },
    getAllOrdens: (req, res) => {
        try{
            const ordens = pedido.getAllOrdens();
            return res.status(200).json(ordens);
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar os pedidos", error});
        }
    },
    getOrdemById: (req, res) => {
        try{
            const {id} = req.paramns;
            const ordem = pedido.getOrdemById(id);
            return res.status(200).json(ordem);
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar pedido", error})
        }
    },
    deleteOrdem: (req, res) => {
        try{
            pedido.deleteOrdem(req.paramns.id);
            res.status(200).json({ message: "Pedido deletado com sucesso"});
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar pedido!", error});
        }
    }
}

module.exports = router;