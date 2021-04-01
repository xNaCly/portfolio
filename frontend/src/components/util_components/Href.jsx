import { Link } from "react-router-dom";

function Href({ href, text, className, home = false }) {
	return (
		<span className="Link_container">
			<Link className={className} to={href}>
				{home ? (
					<img src="https://avatars0.githubusercontent.com/u/47723417" className="navbar_icon" alt="" />
				) : (
					text
				)}
			</Link>
		</span>
	);
}

export default Href;
