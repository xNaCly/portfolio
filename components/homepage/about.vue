<template>
	<div class="about-container fade-in">
		<img src="https://avatars.githubusercontent.com/u/47723417?v=4" class="about-image" />
		<div class="about-secondary-container">
			<p>Hi, I'm Matteo, an {{ age }}-year old student from Germany.</p>
			<p class="about-description">I'm interested in technologies and programming.</p>
			<p class="about-description">
				I like contributing to free open source software and creating small, quality of life improving projects.
			</p>
			<p class="about-description">
				I'm currently majoring in computer science at <a href="https://www.dhbw.de/">DHBW</a>.
			</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			// calulate age by subtracting the birthday timestamp from the current timestamp and dividing the result by (24 * 3600 * 365.25 * 1000) which is the lenght of a year and flooring the result
			age: ~~((Date.now() - new Date("2003-02-10")) / (24 * 3600 * 365.25 * 1000)),
		};
	},
	name: "About",
};
</script>
