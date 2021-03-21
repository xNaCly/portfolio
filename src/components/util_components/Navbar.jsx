import { useState, useEffect } from "react";
import Href from "./Href";

import themes from "../../themes/themes.json";
import { defaultTheme } from "../../data/config.json";

function Navbar() {
	const [theme, updateTheme] = useState(localStorage.getItem("selected-theme") ?? defaultTheme);

	useEffect(() => {
		localStorage.setItem("selected-theme", theme);
	}, [theme]);

	return (
		<div className="navbar">
			<div className="left_navbar_element">
				<Href
					className={window.location.pathname === "/" ? "Link Link_highlighted" : "Link"}
					text="Home"
					href="/"></Href>
				<Href
					className={window.location.pathname === "/contact" ? "Link Link_highlighted" : "Link"}
					text="Contact"
					href="/contact"></Href>

				<Href
					className={window.location.pathname === "/projects" ? "Link Link_highlighted" : "Link"}
					text="Projects"
					href="/projects"></Href>
			</div>
			<div className="right_navbar_element">
				<button
					class="material-icons"
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
