import { MongoDatabase } from "lambert-db";
import { DATABASE as url } from "./config.json";
console.log(url);
const db: MongoDatabase = new MongoDatabase(url);
export default db;
