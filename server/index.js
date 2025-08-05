// Importa el módulo 'cors'. CORS es un paquete de node.js para proporcionar un middleware Connect/Express
// que se puede usar para habilitar CORS con varias opciones.
import cors from "cors";

// Importa el módulo 'express'. Express es un marco de aplicación web para node.js
// diseñado para construir aplicaciones web y API.
import express from "express";

import operadoras from "./routes/operadoras/getOperadoras.routes.js";
const app = express();

// Usa el middleware CORS. Esto permite o restringe los recursos solicitados en la página web
// para interactuar con los recursos de un dominio diferente.
app.use(cors());

// Usa el middleware express.json(). Este es un middleware incorporado en Express.
// Analiza las solicitudes entrantes con cargas útiles JSON y se basa en body-parser.

app.use(express.json({ limit: "10mb" }));
app.use("/api", operadoras);

app.listen(3002);

console.log("server on port", 3002);
