import { Link } from "react-router-dom";
function BlogEntryCompact({ key_, title, createdAt, tags, author }) {
	return (
		<div className="blog_entry">
			<Link className="blog_header_compact" to={`/entry/${createdAt}`}>
				{title} <span className="alert">#{key_}</span>
			</Link>
			<hr className="hr_sec" />
			<p className="languages easter entry_date">
				{new Date(createdAt).toUTCString()}, ~{author}
			</p>
			<div className="code tag_container bg_remover">
				{tags.map((x) => (
					<span key={x} className={`blog_tag blog_tag_sec tag_${x.toLowerCase()}`}>
						{x}
					</span>
				))}
			</div>
		</div>
	);
}

export default BlogEntryCompact;
