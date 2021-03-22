import projects from "../src/data/projects.json";

module.exports = (req, res) => {
	res.json({
		projects,
	});
};
