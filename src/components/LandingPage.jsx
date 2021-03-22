import { useState } from "react";

import Navbar from "./util_components/Navbar";
import SkillSetField from "./landingpage_components/SkillSetField";
import GithubStats from "./landingpage_components/GithubStats";

import { toggledByDefault, hidden, prod } from "../data/config.json";
import { Skillset, About, GithubStatsHref, Contact } from "../data/about.json";
import ContactField from "./landingpage_components/ContactField";

const LandingPage = () => {
	const [githubStatsVisible, setGithubStatsVisibleFlag] = useState(toggledByDefault.githubStats);
	const [skillSetVisible] = useState(toggledByDefault.skillSet);
	// const [aboutVisible, setAboutVisibleFlag] = useState(toggledByDefault.about);

	// TODO: figure out a way to do the up sticky arrow on ios mobile
	// const [position, updatePos] = useState(0);

	// document.addEventListener("scroll", () => {
	// 	updatePos(document.documentElement.scrollTop);
	// });

	return (
		<div>
			<Navbar></Navbar>
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
			<div className="landing_container">
				<div className="about">
					<img alt="pp" className="avatar_img" src="https://avatars0.githubusercontent.com/u/47723417" />
					{About.replace("AGE", new Date().getFullYear() - 2003)
						.split("\n")
						.map((x) => (
							<p key={x.slice(0, 6)} className="text_padding">
								{x}
							</p>
						))}
					<div className="icon_container">
						{Contact.map((x) => (
							<ContactField {...x} />
						))}
					</div>
				</div>
			</div>
			<div className="landing_container">
				<div className="secondary_container">
					<div className="heading_container">
						<span className="text_padding Link_highlighted">Skills</span>
						{/* <button onClick={() => skillSetVisibleFlag(!skillSetVisible)}>
							[{skillSetVisible ? "-" : "+"}]
						</button> */}
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
		</div>
	);
};

export default LandingPage;
