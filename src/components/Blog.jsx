import NotYet from "./util_components/NotYet";
import Navbar from "./util_components/Navbar";
function Blog() {
	return (
		<>
			<Navbar />
			<NotYet
				notyet={true}
				custom={
					"This section will contain a blog about my weekly coding adventures, new technologies i discover or just things I'm generaly interested in.\n Stay tuned..."
				}
			/>
		</>
	);
}

export default Blog;
