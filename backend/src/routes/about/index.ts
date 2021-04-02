import { Router } from "express";
import db from "../../db";

const router = Router();

router.get("/", async (req, res) => {
	const about = await db.data.about.get({ _id: false });
	res.send({ about });
});

export default router;
