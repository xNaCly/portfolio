import AOS from "aos";
import "aos/dist/aos.css";

export default {
	mounted() {
		AOS.init({ duration: 1000 /*, mirror: true*/ });
	},
};
