<template>
	<div class="about-container fade-in">
		<div class="about-leftside">
			<div>
				<p class="about-description">Hi, I'm</p>
				<h1 class="about-name">MATTEO</h1>
				<h2 class="about-name-sub">a versatile full-stack developer</h2>
				<h2 class="about-name-sub">and tech enthusiast</h2>
			</div>
			<div class="about-contact-container">
				<a href="https://github.com/xnacly" class="link"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#62bfed"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon"
					>
						<path
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						/></svg
				></a>
				<a href="mailto:xnacly@gmail.com">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#62bfed"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon"
					>
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
						<polyline points="22,6 12,13 2,6" />
					</svg>
				</a>
			</div>
		</div>
		<div class="about-rightside">
			<div class="navigator">
				<h2 class="navigator_header">About:</h2>
				<div class="custom-codeblock">
					<p>1<span class="tabbed">const Author = {</span></p>
					<p>2<span class="tabbed_2">name: "Matteo",</span></p>
					<p>3<span class="tabbed_2">alias: "xnacly",</span></p>
					<p>
						4<span class="tabbed_2">age: {{ age }},</span>
					</p>
					<p>5<span class="tabbed_2">for_hire: false</span></p>
					<p>6<span class="tabbed">}</span></p>
				</div>
				<div class="colorpalette">
					<div class="background_0"></div>
					<div class="background_1"></div>
					<div class="background_3"></div>
					<div class="primary_0"></div>
					<div class="primary_1"></div>
				</div>
			</div>
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
