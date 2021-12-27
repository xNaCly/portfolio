export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Portfolio - xnacly",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
			{ name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@assets/style.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ["@nuxtjs/color-mode"],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxt/content"],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	content: {
		liveEdit: false,
		markdown: {
			prism: {
				theme: "prism-themes/themes/prism-vsc-dark-plus.css",
			},
		},
	},
	colorMode: {
		preference: "system",
		fallback: "light",
	},
	server: {
		host: "0.0.0.0",
		port: "3000", // optional
	},
};
