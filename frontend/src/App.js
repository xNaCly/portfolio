import BlogEntryExtended from "./components/blog_components/BlogEntryExtended";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotYet from "./components/util_components/NotYet";
import Footer from "./components/util_components/Footer";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import applyTheme from "./util/Theme";
import Blog from "./components/Blog";
import { prod } from "./config.json";
import { useEffect } from "react";
import "./themes/style.css";

let defaultTheme;

function App() {
	useEffect(() => {
		const getTheme = async () => {
			const themeSelected = localStorage.getItem("selected-theme");
			let res = await fetch(`${prod ? "" : "http://localhost:8080"}/api/config`);
			res = await res.json();
			res = res.flags[0].defaultTheme;
			// console.log(themeSelected, res); > undefined
			applyTheme(themeSelected, res);
			defaultTheme = res;
		};
		getTheme();
	}, []);

	return (
		<BrowserRouter>
			<Switch>
				<Route
					component={({ match }) => <LandingPage match={match} defaultTheme={defaultTheme} />}
					path="/"
					exact></Route>
				<Route
					component={({ match }) => <Projects match={match} defaultTheme={defaultTheme} />}
					path="/projects"
					exact></Route>
				<Route
					component={({ match }) => <Blog match={match} defaultTheme={defaultTheme} />}
					path="/blog"
					exact></Route>
				<Route
					component={({ match }) => <BlogEntryExtended match={match} defaultTheme={defaultTheme} />}
					path="/entry/:id"></Route>
				<Route component={({ match }) => <NotYet match={match} defaultTheme={defaultTheme} />} path="*"></Route>
			</Switch>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
