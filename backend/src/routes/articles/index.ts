import { check, HTTPError } from "lambert-server";
import { hash } from "../../../config.json";
import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../../../db";

const router = Router();

const BlogSchema = {
	auth: String,
	data: {
		author: String,
		tags: [String],
		title: String,
		content: String,
	},
};

router.get("/", async (req, res) => {
	const blog = await db.data.blog.get({ _id: false });
	res.send({ blog });
});

router.post("/", check(BlogSchema), async (req, res) => {
	const { auth } = req.body;
	if (!(await bcrypt.compare(auth, hash))) throw new HTTPError("Invalid Authentication", 401);

	const { data } = req.body;
	data.createdAt = Date.now();
	await db.data.blog.push(data);

	res.status(201).send({ feedback: `created ${data.title} - article` });
});

export default router;
