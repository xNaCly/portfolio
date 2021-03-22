import about from "./data/about.json";

module.exports = (req, res) => {
	res.json({
		about,
	});
};
