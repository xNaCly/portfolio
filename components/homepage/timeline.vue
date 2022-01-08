<template>
	<div class="timeline-container">
		<h2 class="navigator_header">{{ locale[language].header }}:</h2>
		<button v-on:click="changeLang">change language</button>
		<div class="timeline">
			<div class="timeline-item" v-for="item in locale[language].elements" :key="item.year">
				<h3>{{ item.year }}</h3>
				<p>
					{{ item.title }}<span>{{ item.content }}</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Timeline",
	data() {
		return {
			language: "english",
			locale: {
				english: {
					header: "Timeline",
					elements: [
						{
							year: "2009-2015",
							title: "Elementary School",
							content: "",
						},
						{
							year: "2015-2021",
							title: "Highschool",
							content: "",
						},
						{
							year: "2021-",
							title: "University",
							content: "majoring in computer science",
						},
					],
				},
				german: {
					header: "Lebenslauf",
					elements: [
						{
							year: "2009-2015",
							title: "Grundschule",
							content: "",
						},
						{
							year: "2015-2021",
							title: "Gymnasium",
							content: "",
						},
						{
							year: "2021-",
							title: "Universität",
							content: "anstreben eines Bachelors in der angewandten Informatik",
						},
					],
				},
			},
		};
	},
	methods: {
		changeLang() {
			this.language === "english" ? (this.language = "german") : (this.language = "english");
		},
	},
};
</script>
