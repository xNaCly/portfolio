import Navbar from "./util_components/Navbar";
import NotYet from "./util_components/NotYet";

function Contact() {
	return (
		<div>
			<Navbar></Navbar>
			<NotYet notyet={true}></NotYet>
		</div>
	);
}

export default Contact;
