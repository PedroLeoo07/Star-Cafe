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
 
}