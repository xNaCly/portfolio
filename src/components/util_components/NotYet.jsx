import Navbar from "./Navbar";

function NotYet({ notyet = false, custom = null }) {
	return (
		<div>
			{!notyet && <Navbar />}
			<div className="not_yet_mf_container">
				{custom &&
					custom.split("\n").map((x) => (
						<code>
							<p className="secondary_text languages" key={x.slice(0, 6)}>
								{x}
							</p>
						</code>
					))}
				<span className="not_yet_mf">{"¯\\_(ツ)_/¯"}</span>
				<code className="secondary_text languages">
					{notyet
						? "this page isn't written yet, file a complaint and shove it up your ass :)"
						: "404 - Not found"}
				</code>
			</div>
		</div>
	);
}

export default NotYet;
