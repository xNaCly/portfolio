<template>
	<div class="wave" v-bind:class="`wave_${$colorMode.value}`">
		<div class="homepage-container">
			<HomepageAbout />
			<div class="article-previews-container homepage-article">
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
			<div class="skillset-wrapper-wrapper">
				<HomepageSkillset />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "index",
	async asyncData({ $content }) {
		const posts = (
			await $content("articles")
				.only(["title", "description", "writtenat", "slug", "timetoread", "draft"])
				.sortBy("writtenat", "desc")
				.fetch()
		)
			.filter((x) => {
				return !x.draft;
			})
			.map((x) => {
				return {
					...x,
					writtenat: new Date(x.writtenat).toLocaleDateString(),
				};
			});

		return {
			posts,
		};
	},
};
</script>
<style></style>
