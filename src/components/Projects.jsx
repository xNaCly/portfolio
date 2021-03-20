import Navbar from "./util_components/Navbar";

import ProjectCompact from "./project_components/ProjectCompact";

import { Projects as ProjectsData } from "../data/projects.json";

function Projects() {
	return (
		<div>
			<Navbar></Navbar>
			<div className="projects_container">
				{ProjectsData.map((project) => (
					<ProjectCompact {...project}></ProjectCompact>
				))}
			</div>
		</div>
	);
}

export default Projects;
