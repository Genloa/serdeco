import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import express from "express";

import operadoras from "./routes/operadoras/getOperadoras.routes.js";
import oficinas from "./routes/oficinas/getOficinas.routes.js";
import reclamos from "./routes/reclamos/createReclamo.routes.js";
import preguntasFrecuentes from "./routes/preguntasfrecuentes/getPreguntasFrecuentes.route.js";
import postUsuarioCatastro from "./routes/catastro/postUsuarioCatastro.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Rutas API
app.use("/api", operadoras);
app.use("/api", oficinas);
app.use("/api", reclamos);
app.use("/api", preguntasFrecuentes);
app.use("/api", postUsuarioCatastro);

// Configura __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Inicia el servidor al final
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
