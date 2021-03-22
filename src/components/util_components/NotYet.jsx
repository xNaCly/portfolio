import Navbar from "./Navbar";

function NotYet({ notyet = false, custom = null }) {
	return (
		<div>
			{!notyet && <Navbar />}
			<div className="not_yet_mf_container">
				{custom &&
					custom.split("\n").map((x) => (
						<code>
							<span className="secondary_text languages" key={x.slice(0, 6)}>
								{x}
							</span>
						</code>
					))}
				<span className="not_yet_mf">{"¯\\_(ツ)_/¯"}</span>
				<code className="secondary_text languages">
					{notyet ? (
						<p>
							<span className="alert">501</span> - Page not yet added
						</p>
					) : (
						<>
							<p>
								<span className="alert">404</span> - Not found
								<p className="secondary_text languages easter">
									are you as lost as{" "}
									<a className="easter" href="https://github.com/Flam3rboy">
										Flam3rboy
									</a>
									?
								</p>
							</p>
						</>
					)}
				</code>
			</div>
		</div>
	);
}

export default NotYet;
