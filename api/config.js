import config from "../src/data/config.json";

module.exports = (req, res) => {
	res.json({
		config,
	});
};
