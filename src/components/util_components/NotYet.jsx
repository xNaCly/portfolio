import Footer from "./Footer";
import Navbar from "./Navbar";

function NotYet({ notyet = false }) {
	return (
		<div>
			{!notyet && <Navbar />}
			<div className="not_yet_mf_container">
				<span className="not_yet_mf">{"¯\\_(ツ)_/¯"}</span>
				<code className="secondary_text languages">
					{notyet
						? "this page isn't written yet, file a complain and shove it up your ass :)"
						: "404 - Not found"}
				</code>
			</div>
			{!notyet && <Footer />}
		</div>
	);
}

export default NotYet;
