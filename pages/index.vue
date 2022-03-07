<template>
	<div>
		<div class="homepage-container">
			<HomepageAbout />
			<div data-aos="fade-up-right" class="article-previews-container homepage-article">
				<h2 class="navigator_header">Blog:</h2>
				<div
					v-for="article of posts"
					:key="article.slug"
					data-aos="fade-right"
					class="article-preview homepage-article"
				>
					<p class="article-preview-title primary-fg reveal-text">
						<NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="link link-flex">
							{{ article.title }}
						</NuxtLink>
					</p>
					<span class="article-preview-subtitle fade-in"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-book"
						>
							<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
							<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg
						>{{ article.writtenat }} • {{ article.timetoread }} read</span
					>
					<p class="article-preview-desc fade-in">
						{{ article.description }}
					</p>
				</div>
			</div>
			<!-- <div data-aos="fade-up-left" class="projects-container-container">
				<h2 class="navigator_header">Projects:</h2>
				<div class="projects-container">
					<div data-aos="fade-left" v-for="project of projects" :key="project.title" class="project-card">
						<a :href="project.href">
							<img class="project-card-image" :src="project.img" />
						</a>
					</div>
				</div>
			</div> -->
			<HomepageSkillset />
		</div>
	</div>
</template>

<script>
import aosMixin from "../mixins/aos";
export default {
	name: "index",
	mixins: [aosMixin],
	async asyncData({ $content }) {
		const projects = await $content("projects").fetch();
		const posts = await $content("articles")
			.only(["title", "description", "writtenat", "slug", "timetoread"])
			.sortBy("writtenat", "desc")
			.fetch();

		const MONTHS = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"Dezember",
		];

		const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		posts.map((x) => {
			let date = new Date(x.writtenat);
			let day = date.getDate();
			let day_name = DAYS[date.getDay()];
			let month = MONTHS[date.getMonth()];
			let year = date.getFullYear();

			return (x.writtenat = `${day_name}, ${month} ${day}th  ${year}`);
		});

		posts.splice(2);
		// projects.splice(3);

		return {
			posts,
			projects,
		};
	},
};
</script>
