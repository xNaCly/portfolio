// import NotYet from "./util_components/NotYet";
import Navbar from "./util_components/Navbar";
import BlogEntryCompact from "./blog_components/BlogEntryCompact";

import { articles as raw_articles } from "../data/blog_articles.json";
import { useEffect, useState } from "react";
import { tags } from "../data/config.json";

function sortArticles() {
	return raw_articles.sort((a, b) => {
		return b.createdAt - a.createdAt;
	});
}

function Blog() {
	const [articles, updateArticles] = useState([]);
	const [filters, updateFilters] = useState([]);

	function checkArticle(article) {
		let check;
		filters.forEach((x) => {
			article.tags.includes(x) ? (check = true) : (check = false);
		});
		return check;
	}

	useEffect(() => {
		updateArticles(sortArticles());
	}, []);

	useEffect(() => {
		if (filters[0]) {
			updateArticles(articles.filter(checkArticle));
		} else {
			updateArticles(sortArticles());
		}
	}, [filters]);

	return (
		<>
			<Navbar />
			<div className="filter_options">
				<div className="code tag_container">
					<span className="filters">Filters: </span>
					{filters[0] &&
						filters.map((x) => (
							<span
								key={x.slice(0, 6)}
								className={`blog_tag tag_${x.toLowerCase()}`}
								onClick={(e) => {
									updateFilters(filters.filter((item) => item !== e.target.innerText));
								}}>
								{x}
							</span>
						))}
					{!filters[0] && <span className="blog_tag">None</span>}
				</div>
				<div className="code tag_container">
					<div className="code tag_container add_filters">
						{tags.map((x) => {
							if (filters.includes(x)) return <></>;
							return (
								<span
									key={x.slice(0, 6)}
									onClick={(e) => updateFilters([...filters, e.target.innerText])}
									className={`blog_tag tag_${x.toLowerCase()}`}>
									{x}
								</span>
							);
						})}
					</div>
				</div>
				<div className="filter_options_buttons">
					{filters[1] && (
						<span
							className="better_button"
							onClick={() => {
								updateFilters([]);
								updateArticles(sortArticles());
							}}>
							Reset Filters
						</span>
					)}
				</div>
			</div>
			<div className="blog_entry_container">
				{articles.map((article, i) => {
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
