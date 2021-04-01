import { Server } from "lambert-server";
import db from "./db";

async function main() {
	await db.init();
	const server = new Server();
	server.app.use(function (req, res, next) {
		res.setHeader("Access-Control-Allow-Origin", "*");
		next();
	});
	await server.registerRoutes(__dirname + "/routes/");
	await server.start();
}

main().catch(console.error);
