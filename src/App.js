import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./themes/style.css";
import applyTheme from "./util/Theme";

import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

import NotYet from "./components/util_components/NotYet";
import Footer from "./components/util_components/Footer";

function App() {
	useEffect(() => {
		const themeSelected = localStorage.getItem("selected-theme");
		applyTheme(themeSelected);
	});

	return (
		<BrowserRouter>
			<Switch>
				<Route component={LandingPage} path="/" exact></Route>
				<Route component={Projects} path="/projects" exact></Route>
				<Route component={Blog} path="/blog" exact></Route>
				<Route component={NotYet} path="*"></Route>
			</Switch>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
