import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./themes/style.css";
import applyTheme from "./util/applyTheme";

import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/util_components/Footer";
import NotYet from "./components/util_components/NotYet";

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
				<Route component={Contact} path="/contact" exact></Route>
				<Route component={NotYet} path="*"></Route>
			</Switch>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
