import config from "./data/config.json";

module.exports = (req, res) => {
	res.json({
		config,
	});
};
