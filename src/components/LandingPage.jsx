import { useState } from "react";

import Navbar from "./util_components/Navbar";

import SkillSetField from "./landingpage_components/SkillSetField";
import GithubStats from "./landingpage_components/GithubStats";

import { Skillset, About, GithubStatsHref } from "../data/about.json";
import { toggledByDefault, hidden } from "../data/config.json";

const LandingPage = () => {
	const [githubStatsVisible, setGithubStatsVisibleFlag] = useState(toggledByDefault.githubStats);
	const [skillSetVisible, skillSetVisibleFlag] = useState(toggledByDefault.skillSet);
	const [aboutVisible, setAboutVisibleFlag] = useState(toggledByDefault.about);

	return (
		<div>
			<Navbar></Navbar>
			<div className="landing_container">
				<div className="secondary_container">
					<div className="heading_container">
						<span className="text_padding Link_highlighted">Skillset</span>
						<button onClick={() => skillSetVisibleFlag(!skillSetVisible)}>
							[{skillSetVisible ? "-" : "+"}]
						</button>
					</div>
					{skillSetVisible && <hr className="hr_full" />}
					{skillSetVisible && (
						<div className="skill_set_container">
							{Object.keys(Skillset).map((skill) => (
								<SkillSetField key={skill} name={skill} image={Skillset[skill]}></SkillSetField>
							))}
						</div>
					)}
				</div>
				{!hidden.includes("githubStats") && (
					<div className="secondary_container_about">
						<div className="heading_container">
							<span className="text_padding Link_highlighted">Github Stats</span>
							<button onClick={() => setGithubStatsVisibleFlag(!githubStatsVisible)}>
								[{githubStatsVisible ? "-" : "+"}]
							</button>
						</div>
						{githubStatsVisible && <hr className="hr_full" />}
						{githubStatsVisible && GithubStatsHref.map((x) => <GithubStats href={x} />)}
					</div>
				)}
			</div>
			<div className="landing_container">
				<div className="secondary_container_about">
					<div className="heading_container">
						<span className="text_padding Link_highlighted">About</span>
						<button onClick={() => setAboutVisibleFlag(!aboutVisible)}>[{aboutVisible ? "-" : "+"}]</button>
					</div>
					{aboutVisible && <hr className="hr_full" />}
					{aboutVisible &&
						About.replace("AGE", new Date().getFullYear() - 2003)
							.split("\n")
							.map((x) => (
								<p key={x.slice(0, 6)} className="text_padding">
									{x}
								</p>
							))}
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
