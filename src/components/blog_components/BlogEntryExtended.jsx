import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../util_components/Navbar";

//! TEMP !-----------
import { articles } from "../../data/blog_articles.json";
import NotYet from "../util_components/NotYet";
//! -----------------

const gfm = require("remark-gfm");

function BlogEntryExtended({ match }) {
	const [entry, updateEntry] = useState(articles.find((x) => x.createdAt === Number(match.params.id)));

	useEffect(() => {
		updateEntry(articles.find((x) => x.createdAt === Number(match.params.id)));
	}, [match.params.id]);

	if (!entry) return <NotYet custom="this entry doesnt exist :(" />;

	const renderers = {
		code: ({ language, value }) => {
			return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />;
		},
	};

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
					<div className="tag_container">
						{entry.tags.map((x) => (
							<span className={`blog_tag tag_${x.toLowerCase()}`}>{x}</span>
						))}
					</div>
					<p className="languages easter entry_date">{new Date(entry.createdAt).toUTCString()}</p>
					<p className="languages easter entry_date">~{entry.author}</p>
				</div>
				<div className="container_entry">
					<ReactMarkdown renderers={renderers} plugins={[gfm]}>
						{entry.content}
					</ReactMarkdown>
				</div>
			</div>
		</>
	);
}

export default BlogEntryExtended;
