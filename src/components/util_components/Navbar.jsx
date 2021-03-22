import { useState, useEffect } from "react";
import Href from "./Href";

// import themes from "../../themes/themes.json";
import { defaultTheme } from "../../data/config.json";

function Navbar() {
	const [theme, updateTheme] = useState(localStorage.getItem("selected-theme") ?? defaultTheme);

	useEffect(() => {
		localStorage.setItem("selected-theme", theme);
	}, [theme]);

	// ! Temp fix for scroll to top not visible on ios mobile
	const [position, updatePos] = useState(0);

	document.addEventListener("scroll", () => {
		updatePos(document.documentElement.scrollTop);
	});

	return (
		<div className="navbar">
			<div className="left_navbar_element">
				<Href
					className={window.location.pathname === "/" ? "Link Link_highlighted" : "Link"}
					text="Home"
					href="/"></Href>
				<Href
					className={window.location.pathname === "/projects" ? "Link Link_highlighted" : "Link"}
					text="Projects"
					href="/projects"></Href>
			</div>
			<div className="right_navbar_element">
				{position > 200 && (
					<button
						className="material-icons md-48 scroll_to_top_temp"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
						arrow_upward
					</button>
				)}
				<button
					className="material-icons"
					onClick={() => {
						updateTheme(theme === "light" ? "dark" : "light");
						window.location.reload();
					}}>
					{theme !== "dark" ? "dark_mode" : "light_mode"}
				</button>
			</div>
		</div>
	);
}

export default Navbar;
