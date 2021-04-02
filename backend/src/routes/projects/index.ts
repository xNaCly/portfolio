import { check, HTTPError } from "lambert-server";
import { hash } from "../../../config.json";
import { Router } from "express";
import db from "../../../db";
import bcrypt from "bcrypt";

const router = Router();

router.get("/", async (req, res) => {
	const projects = await db.data.projects.get({ _id: false });

	res.send({ projects });
});

const ProjectSchema = {
	title: String,
	imageSrc: String,
	desc: String,
	repo: String,
	contr: Boolean,
	lang: [String],
};

router.post("/", check(ProjectSchema), async (req, res) => {
	const { auth } = req.body;
	if (!(await bcrypt.compare(auth, hash))) throw new HTTPError("Invalid Authentication", 401);

	const { data } = req.body;
	data.createdAt = Date.now();
	await db.data.blog.push(data);

	res.status(201).send({ feedback: `created ${data.title} - article` });
});

export default router;
