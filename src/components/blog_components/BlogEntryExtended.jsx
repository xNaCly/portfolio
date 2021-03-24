import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Navbar from "../util_components/Navbar";

//! TEMP !-----------
import { articles } from "../../data/blog_articles.json";
//! -----------------

const gfm = require("remark-gfm");

function BlogEntryExtended({ match }) {
	const [entry, updateEntry] = useState(articles.find((x) => x.createdAt === Number(match.params.id)));

	useEffect(() => {
		updateEntry(articles.find((x) => x.createdAt === Number(match.params.id)));
	}, [match.params.id]);

	return (
		<>
			<Navbar></Navbar>
			<div className="entry_container_extended">
				<Link className="back_link Link_highlighted" to="/blog">
					{"<<<"}
				</Link>
				<div>
					<span className="entry_header">{entry.title}</span>
				</div>
				<div className="date_container">
					<p className="languages easter entry_date">{new Date(entry.createdAt).toLocaleString()}</p>
					<p className="languages easter entry_date">~{entry.author}</p>
				</div>
				<div className="container_entry">
					<ReactMarkdown plugins={[gfm]}>{entry.content}</ReactMarkdown>
				</div>
			</div>
		</>
	);
}

export default BlogEntryExtended;
