import Navbar from "./util_components/Navbar";

import ProjectCompact from "./project_components/ProjectCompact";

import { Projects as ProjectsData } from "../data/projects.json";
import { useState } from "react";

function Projects() {
	const [position, updatePos] = useState(0);

	document.addEventListener("scroll", () => {
		updatePos(document.documentElement.scrollTop);
	});

	return (
		<div>
			<Navbar></Navbar>
			{position > 150 && (
				<button
					className="material-icons md-48 scroll_to_top"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
					arrow_upward
				</button>
			)}
			<div className="projects_container">
				{ProjectsData.map((project) => (
					<ProjectCompact key={project.repo.slice(0.15)} {...project}></ProjectCompact>
				))}
			</div>
		</div>
	);
}

export default Projects;
