import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { prod } from "./../../config.json";
import { Link } from "react-router-dom";
import fetch from "node-fetch";

import Navbar from "../util_components/Navbar";
import NotYet from "../util_components/NotYet";

const gfm = require("remark-gfm");

async function getEntry(id) {
	let res = await fetch(`${prod ? "" : "http://localhost:8080"}/api/articles/${id}`);
	return (await res.json()).blog;
}

function BlogEntryExtended({ match }) {
	const [entry, updateEntry] = useState({});

	useEffect(() => {
		(async () => {
			updateEntry(await getEntry(Number(match.params.id)));
		})();
	}, []);

	useEffect(() => {
		(async () => {
			updateEntry(await getEntry(Number(match.params.id)));
		})();
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
					<span className="entry_header">{entry?.title}</span>
				</div>
				<div className="date_container">
					<div className="tag_container">
						{entry?.tags?.map((x) => (
							<span className={`blog_tag tag_${x.toLowerCase()}`}>{x}</span>
						))}
					</div>
				</div>
				<div className="container_entry">
					<ReactMarkdown renderers={renderers} plugins={[gfm]}>
						{entry?.content}
					</ReactMarkdown>
				</div>
				<div className="container_right_align">
					<p className="languages easter entry_date">{entry?.content?.split(" ")?.length} words</p>
					<p className="languages easter entry_date">{new Date(entry?.createdAt)?.toUTCString()}</p>
					<p className="languages easter entry_date">~{entry?.author}</p>
				</div>
			</div>
		</>
	);
}

export default BlogEntryExtended;
