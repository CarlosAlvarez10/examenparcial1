const express = require("express");
const sequelize = require("./config/database");
const Usuario = require("./models/usuario");

const app = express();
app.use(express.json());

// Conectar a la base de datos
sequelize.sync().then(() => console.log("DB conectada"));

// Rutas CRUD
app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

app.post("/usuarios", async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  await Usuario.update(req.body, { where: { id } });
  res.json({ mensaje: "Usuario actualizado" });
});

app.delete("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  await Usuario.destroy({ where: { id } });
  res.json({ mensaje: "Usuario eliminado" });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
