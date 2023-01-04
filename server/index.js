import express from 'express';
import {PORT} from './config.js';
import indexRoutes from "./routes/index.routes.js"
import tasksRoutes from "./routes/tasks.routes.js"
/*const express = require("express");
const {PORT} = require("./config.js")*/

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use(tasksRoutes);
app.listen(PORT);

console.log('Servidor corriendo en el puerto '+PORT); 
