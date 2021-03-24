function ProjectCompact({ title, imageSrc, desc, repo, contr, lang }) {
	return (
		<div className="project_container">
			<img src={imageSrc} alt={title} />
			<p className="text_padding secondary_text">{title}</p>
			<hr className="hr_full" />
			<span className={contr ? "pill contr" : "pill"}>{contr ? "Contribution" : "Self-Project"}</span>
			{desc.split("\n").map((x) => (
				<p key={x.slice(0.6)} className="text_padding">
					{x}
				</p>
			))}
			<code className="code">
				{lang.map((x) => (
					<span key={x.slice(0.6)} className="languages">
						{x}
					</span>
				))}
			</code>
			<a href={repo} className="Link Link_highlighted">
				Repo
			</a>
		</div>
	);
}

export default ProjectCompact;
