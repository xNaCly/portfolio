import { useState, useEffect } from "react";

import Navbar from "./util_components/Navbar";
import SkillSetField from "./landingpage_components/SkillSetField";
import GithubStats from "./landingpage_components/GithubStats";
import ContactField from "./landingpage_components/ContactField";

import { prod } from "../config.json";
import fetch from "node-fetch";
import ProgressBar from "./project_components/ProgressBar";

async function getAbout() {
	let res = await fetch(
		`${prod ? "https://xnacly.me" : "http://localhost:8080"}/api/about`
	);
	res = await res.json();
	return res;
}

async function getFlags() {
	let res = await fetch(
		`${prod ? "https://xnacly.me" : "http://localhost:8080"}/api/config`
	);
	return await res.json();
}

const LandingPage = ({ defaultTheme }) => {
	const [githubStatsVisible, setGithubStatsVisibleFlag] = useState(false);
	const [skillSetVisible, setSkillSetVisible] = useState(false);
	const [hidden, updateHidden] = useState([]);
	const [About, updateAbout] = useState("");
	const [Contact, updateContact] = useState([]);
	const [Skillset, updateSkillSet] = useState([]);
	const [GithubStatsHref, updateGithub] = useState([]);

	useEffect(() => {
		(async () => {
			const flags = await getFlags();
			const { toggledByDefault, hidden } = flags.flags[0];
			setGithubStatsVisibleFlag(toggledByDefault.githubStats);
			setSkillSetVisible(toggledByDefault.skillSet);
			updateHidden(hidden);

			let about = await getAbout();
			about = about.about[0];
			updateAbout(about.About);
			updateContact(about.Contact);
			updateSkillSet(about.Skillset);
			updateGithub(about.Skillset);
		})();
	}, []);

	// const [aboutVisible, setAboutVisibleFlag] = useState(toggledByDefault.about);

	// TODO: figure out a way to do the up sticky arrow on ios mobile
	// const [position, updatePos] = useState(0);

	// document.addEventListener("scroll", () => {
	// 	updatePos(document.documentElement.scrollTop);
	// });

	return (
		// <></>
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
			<div className="landing_container">
				<div className="about">
					<div className="about_">
						<img
							alt="pp"
							className="avatar_img"
							src="https://avatars0.githubusercontent.com/u/47723417"
						/>
						<div>
							{About.replace(
								"AGE",
								new Date().getFullYear() - 2003
							)
								.split("\n")

								.map((x) => (
									<p
										key={x.slice(0, 6)}
										className="text_padding">
										{x}
									</p>
								))}
						</div>
					</div>
					<div className="icon_container">
						{Contact.map((x) => (
							<ContactField key={x.alt} {...x} />
						))}
					</div>
				</div>
			</div>
			{/* <div className="landing_container">
				<div className="secondary_container">
					<div className="heading_container">
						<span className="text_padding Link_highlighted hide_underscore">Skills</span>
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
			</div> */}
			<div className="progress_wrapper">
				<div className="progess_container">
					<h1>Languages:</h1>
					<ProgressBar
						text="German"
						progress={100}
						progress_text={"Native Speaker"}></ProgressBar>
					<ProgressBar
						text="English"
						progress={90}
						progress_text={"C1 - Advanced"}></ProgressBar>
					<ProgressBar text="Spanish" progress={15}></ProgressBar>
					<ProgressBar text="French" progress={10}></ProgressBar>
				</div>
				<div className="progess_container">
					<h1>Technologies:</h1>
					<ProgressBar
						text={"HTML & CSS"}
						progress={90}></ProgressBar>
					<ProgressBar text="Javascript" progress={75}></ProgressBar>
					<ProgressBar text="Typescript" progress={70}></ProgressBar>
					<ProgressBar text="Python" progress={70}></ProgressBar>
				</div>
			</div>
			<div className="progress_wrapper">
				<div className="progess_container">
					<h1>Frameworks:</h1>
					<ProgressBar text="Node-fetch" progress={70}></ProgressBar>
					<ProgressBar text="Express.js" progress={60}></ProgressBar>
					<ProgressBar text="React.js" progress={40}></ProgressBar>
					<ProgressBar text="Quick.db" progress={20}></ProgressBar>
					<ProgressBar text="Puppeteer" progress={20}></ProgressBar>
				</div>
				<div className="progess_container">
					<h1>Other:</h1>
					<ProgressBar text="VS-code" progress={85}></ProgressBar>
					<ProgressBar text="Git, Github" progress={80}></ProgressBar>
					<ProgressBar text="Node.js" progress={75}></ProgressBar>
					<ProgressBar text="Bash" progress={45}></ProgressBar>
					<ProgressBar text="Nvim, vim" progress={45}></ProgressBar>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
