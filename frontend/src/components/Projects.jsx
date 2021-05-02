import ProjectCompact from "./project_components/ProjectCompact";
import Navbar from "./util_components/Navbar";
import { useEffect, useState } from "react";
import { prod } from "../config.json";
import fetch from "node-fetch";

async function getProjects() {
	let res = await fetch(`${prod ? "https://xnacly.me" : "http://localhost:8080"}/api/projects`);
	return await res.json();
}

function Projects({ defaultTheme }) {
	const [projects, updateProjects] = useState([]);

	useEffect(() => {
		const updateprojects = async () => {
			const proj = await getProjects();
			updateProjects(proj.projects);
		};
		updateprojects();
	}, []);

	// TODO: figure out a way to do the up sticky arrow on ios mobile
	// const [position, updatePos] = useState(0);

	// document.addEventListener("scroll", () => {
	// 	updatePos(document.documentElement.scrollTop);
	// });

	return (
		<div>
			<Navbar defaultTheme={defaultTheme} />
			{
				// TODO: figure out a way to do the up sticky arrow on ios mobile
				/* {position > 150 && (
				<button
					className="material-icons md-48 scroll_to_top"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
					arrow_upward
				</button>
			)} */
			}
			<div className="projects_container">
				{projects.map((project) => (
					<ProjectCompact key={project.repo.slice(0.15)} {...project}></ProjectCompact>
				))}
			</div>
		</div>
	);
}

export default Projects;
