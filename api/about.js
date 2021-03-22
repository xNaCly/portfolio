import about from "../src/data/about.json";

module.exports = (req, res) => {
	res.json({
		about,
	});
};
