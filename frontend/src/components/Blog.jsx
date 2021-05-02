// import NotYet from "./util_components/NotYet";
import BlogEntryCompact from "./blog_components/BlogEntryCompact";
import Navbar from "./util_components/Navbar";
import { useEffect, useState } from "react";
import { prod } from "../config.json";
import fetch from "node-fetch";

async function getArticles() {
	let res = await fetch(`${prod ? "https://xnacly.me" : "http://localhost:8080"}/api/articles`);
	return await res.json();
}

async function getTags() {
	let res = await fetch(`${prod ? "https://xnacly.me" : "http://localhost:8080"}/api/config`);
	return await res.json();
}

async function sortArticles() {
	const raw_articles = await getArticles();
	return raw_articles.blog.sort((a, b) => {
		return b.createdAt - a.createdAt;
	});
}

function Blog({ defaultTheme }) {
	const [articles, updateArticles] = useState([]);
	const [filters, updateFilters] = useState([]);

	const [search, updateSearch] = useState(undefined);

	const [optionsExtendedFlag, updateOptionsExtendedFlag] = useState(false);

	const [tags, setTags] = useState([]);

	function checkArticle(article) {
		let check;
		filters.forEach((x) => {
			article.tags.includes(x) ? (check = true) : (check = false);
		});
		return check;
	}

	useEffect(() => {
		const gettags = async () => {
			let config = await getTags();
			setTags(config.flags[0].tags);
		};
		gettags();
		sortArticles().then(updateArticles);
	}, []);

	useEffect(() => {
		(async () => {
			if (filters[0]) {
				updateArticles(articles.filter(checkArticle));
			} else {
				updateArticles(await sortArticles());
			}
		})();
	}, [filters]);

	useEffect(() => {
		(async () => {
			if (search) {
				updateArticles(
					articles.filter((x) => {
						try {
							return new RegExp(search, "gi").test(x.title);
						} catch {
							return true;
						}
					})
				);
			} else {
				updateArticles(await sortArticles());
			}
		})();
	}, [search]);

	return (
		<div>
			<Navbar defaultTheme={defaultTheme} />
			<div className="filter_options">
				<div className="code tag_container">
					<input placeholder="Search" onChange={(e) => updateSearch(e.target.value)}></input>
					<span
						onClick={() => updateOptionsExtendedFlag(!optionsExtendedFlag)}
						className="better_button filters">
						Filters:
					</span>
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
					{!filters[0] && <span className="blog_tag none_tag">None</span>}
				</div>
				{optionsExtendedFlag && (
					<>
						<div className="code tag_container">
							<div className="code tag_container add_filters">
								{tags.map((x) => {
									if (filters.includes(x)) return <></>;
									return (
										<span
											key={x.slice(0, 6)}
											onClick={(e) => updateFilters([...filters, e.target.innerText])}
											className={`blog_tag blog_tag_sec tag_${x.toLowerCase()}`}>
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
									onClick={async () => {
										updateFilters([]);
										updateArticles(await sortArticles());
									}}>
									Reset Filters
								</span>
							)}
						</div>
					</>
				)}
			</div>
			<div className="blog_entry_container">
				{articles.map((article, i) => {
					return <BlogEntryCompact key={article.createdAt} key_={i} {...article}></BlogEntryCompact>;
				})}
			</div>
		</div>
	);
}

export default Blog;
