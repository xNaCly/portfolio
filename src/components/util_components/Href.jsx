import { Link } from "react-router-dom";

function Href({ href, text, className }) {
	return (
		<span className="Link_container">
			<Link className={className} to={href}>
				{text}
			</Link>
		</span>
	);
}

export default Href;
