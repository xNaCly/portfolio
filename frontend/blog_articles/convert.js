const fs = require("fs");
/**
 * @description creates a article object containing:
 * @returns ArticleObject (paste into blog_articles)
 */
function createArticleObject() {
	return {
		author: "xnacly",
		createdAt: Date.now(),
		tags: [],
		title: process.argv[3],
		content: fs.readFileSync(__dirname + `/${process.argv[2]}`).toString(),
	};
}
console.log(JSON.stringify(createArticleObject()));
