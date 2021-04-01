import { Router } from "express";
import db from "../../../db";

const router = Router();

router.get("/", async (req, res) => {
	const flags = await db.data.flags.get({ _id: false });

	res.send({ flags });
});

export default router;
