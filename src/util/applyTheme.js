import themes from "../themes/themes.json";
import { defaultTheme } from "../data/config.json";
import themeFonts from "../themes/theme_fonts.json";

/**
 * @param themeSelected `../themes/theme_fonts.json`
 * @returns `void`
 * @description injects given font into html head
 */
function injectFontUrl(themeSelected) {
	const fontURL = themeFonts[themeSelected];

	var head = document.getElementsByTagName("head")[0];

	var link = document.createElement("link");
	link.rel = "preconnect";
	link.href = "https://fonts.gstatic.com";

	var link2 = document.createElement("link");
	link.rel = "stylesheet";
	link.href = fontURL;

	head.appendChild(link);
	head.appendChild(link2);
}

/**
 * @param themeSelected `../themes/themes.json`
 * @returns `void`
 * @description applies theme variables to the current stylesheet
 */
function applyTheme(themeSelected) {
	const themeName = themeSelected ?? defaultTheme;
	const themeValues = themes[themeName];
	const themeKeys = Object.keys(themeValues);
	themeKeys.forEach((themeKey) => {
		document.documentElement.style.setProperty(themeKey, themeValues[themeKey]);
	});
	injectFontUrl(themeName);
}

export default applyTheme;
