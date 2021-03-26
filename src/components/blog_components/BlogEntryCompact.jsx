import { Link } from "react-router-dom";
function BlogEntryCompact({ key_, title, createdAt, content, tags }) {
	return (
		<div className="blog_entry">
			<Link className="blog_header_compact" to={`/entry/${createdAt}`}>
				{title} <span className="alert">#{key_}</span>
			</Link>
			<hr className="hr_sec" />
			<p className="languages easter entry_date">{new Date(createdAt).toUTCString()}</p>
			<div className="code tag_container">
				{tags.map((x) => (
					<span className={`blog_tag tag_${x.toLowerCase()}`}>{x}</span>
				))}
			</div>
		</div>
	);
}

export default BlogEntryCompact;
