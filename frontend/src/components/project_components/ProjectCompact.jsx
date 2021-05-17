function ProjectCompact({ title, imageSrc, desc, repo, contr, lang }) {
	return (
		<div className="project_container">
			<div>
				<div className="header_container_project">
					<p className="text_padding secondary_text project_header">{title}</p>
					<a href={repo} className="material-icons project_header">
						code
					</a>
				</div>
				{desc.split("\n").map((x) => (
					<p key={x.slice(0.6)} className="text_padding project_content">
						{x}
					</p>
				))}
			</div>
			{/* <a href={repo} className="Link Link_highlighted">
				Repo
			</a> */}
			<code className="tag_container_project">
				{lang.map((x) => (
					<span key={x.slice(0.6)} className={`blog_tag tag_${x.toLowerCase()} project_tag`}>
						{x}
					</span>
				))}
			</code>
			{/* <span className={contr ? "pill contr" : "pill"}>{contr ? "Contribution" : "Self-Project"}</span> */}
		</div>
	);
}

export default ProjectCompact;
