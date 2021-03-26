// import NotYet from "./util_components/NotYet";
import Navbar from "./util_components/Navbar";
import BlogEntryCompact from "./blog_components/BlogEntryCompact";

import { articles as raw_articles } from "../data/blog_articles.json";
import { useEffect, useState } from "react";

function Blog() {
	const [articles, updateArticles] = useState([]);
	useEffect(() => {
		const sorted = raw_articles.sort((a, b) => {
			return b.createdAt - a.createdAt;
		});
		updateArticles(sorted);
	}, []);
	console.log(articles);
	let i = 0;
	return (
		<>
			<Navbar />
			<div className="blog_entry_container">
				{articles.map((article) => {
					i++;
					return <BlogEntryCompact key={article.createdAt} key_={i} {...article}></BlogEntryCompact>;
				})}
			</div>
			{/* <NotYet
				notyet={true}
				custom={
					"This section will contain a blog about my weekly coding adventures,\nnew technologies i discover or just things I'm generaly interested in.\n Stay tuned..."
				}
			/> */}
		</>
	);
}

export default Blog;
