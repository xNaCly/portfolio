import { check, HTTPError } from "lambert-server";
import { hash } from "../../../../config.json";
import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../../../../db";

const router = Router();

const BlogUpdateSchema = { auth: String, data: { $title: String, $content: String } };

router.get("/", async (req, res) => {
	const { ARTICLEID } = req.params;
	if (!ARTICLEID) throw new HTTPError("Article doesn't exist", 404);

	const blog = await db.data.blog({ createdAt: Number(ARTICLEID) }).get({ _id: false });
	res.send({ blog });
});

router.put("/", check(BlogUpdateSchema), async (req, res) => {
	const { ARTICLEID } = req.params;
	if (!ARTICLEID) throw new HTTPError("Article doesn't exist", 404);

	const { auth } = req.body;
	if (!(await bcrypt.compare(auth, hash))) throw new HTTPError("Invalid Authentication", 401);

	const { data } = req.body;
	data.lastEdited = Date.now();
	await db.data.blog({ createdAt: Number(ARTICLEID) }).set(data);

	res.status(200).send({ feedback: `updated ${data.title} - article` });
});

export default router;
