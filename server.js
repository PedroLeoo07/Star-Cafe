const express = require("express");
const cors = require("cors");
const menuRoutes = require("./src/routes/menuRoutes");

const app = express();
const PORT = 1417;

app.use(cors());
app.use(express.json());

app.use ("/api", menuRoutes);

app.get("/", (req, res) => {
    res.send("Consegui Levantar");
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na http://localhost ${PORT}`);
});