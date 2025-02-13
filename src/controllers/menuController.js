const MenuList = require("../models/MenuList");
const menu = require("../models/Menu");

const cardapio = new MenuList();

cardapio.addMenu(new menu ("Cappuccino", "R$5,00", 2));
cardapio.addMenu(new menu ("Café", "R$3,50", 1));
cardapio.addMenu(new menu ("Pão na chapa", "R$2,00", 1));

const router = {
    getAllMenu: (req, res) => {
        try {
            const menu = cardapio.getAllMenu();
            return res.status(200).json(menu);
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar o cardápio, error", error});
        }
    },
};

module.exports = router;