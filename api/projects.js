import projects from "./data/projects.json";

module.exports = (req, res) => {
	res.json({
		projects,
	});
};
