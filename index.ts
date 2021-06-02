import bodyParser from "body-parser";
import Server from "./classes/server";
import cors from 'cors';

// Las Rutas
import router from "./routes/routes";

const server = new Server();

// BodyParser
server.app.use( bodyParser.urlencoded({ extended:true }) );
server.app.use( bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true}));

// Rutas
server.app.use('/', router);

// Inicio del Servidor
server.start();
