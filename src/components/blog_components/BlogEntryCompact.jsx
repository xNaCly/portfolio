import { Link } from "react-router-dom";
function BlogEntryCompact({ key_, title, createdAt, content }) {
	return (
		<div className="blog_entry">
			<Link to={`/entry/${createdAt}`}>
				{title} <span className="alert">#{key_}</span>
			</Link>
			<hr className="hr_sec" />
			<p className="languages easter entry_date">{new Date(createdAt).toLocaleString()}</p>
		</div>
	);
}

export default BlogEntryCompact;
