import { useState, useEffect } from "react";
import Href from "./Href";

function Navbar({ defaultTheme }) {
	// console.log(defaultTheme); > undefined
	const [theme, updateTheme] = useState(localStorage.getItem("selected-theme") ?? defaultTheme);

	useEffect(() => {
		theme && localStorage.setItem("selected-theme", theme);
	}, [theme]);

	// ! Temp fix for scroll to top not visible on ios mobile
	const [position, updatePos] = useState(0);

	document.addEventListener("scroll", () => {
		updatePos(document.documentElement.scrollTop);
	});

	return (
		<div className="navbar">
			<div className="navbar_2">
				<div className="left_navbar_element">
					<Href
						className={window.location.pathname === "/" ? "Link Link_highlighted" : "Link"}
						text="Home"
						href="/"></Href>
					<Href
						className={window.location.pathname === "/projects" ? "Link Link_highlighted" : "Link"}
						text="Projects"
						href="/projects"></Href>
					<Href
						className={
							window.location.pathname === "/blog" || window.location.pathname.startsWith("/entry")
								? "Link Link_highlighted"
								: "Link"
						}
						text="Blog"
						href="/blog"></Href>
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
						id="navbar_icon"
						onClick={() => {
							updateTheme(theme === "light" ? "dark" : "light");
							window.location.reload();
						}}>
						{theme !== "dark" ? "dark_mode" : "light_mode"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
