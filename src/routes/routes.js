const express = require("express");
const router = express.Router();
const ordemController = require("../controllers/ordemController");
const menuController = require("../controllers/menuController");

router.get("/menu", menuController.getAllMenu);
router.get("/ordem", ordemController.getAllOrdens);
router.get("/ordem/:id", ordemController.getOrdemById);
router.post("/ordem", ordemController.addOrdem);
router.delete("/ordem/:id", ordemController.deleteOrdem);

module.exports = router