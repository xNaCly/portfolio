<template>
	<div>
		<div class="article-container">
			<div class="article">
				<NuxtLink class="link link-flex" to="/"
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
						class="feather feather-arrow-left"
					>
						<line x1="19" y1="12" x2="5" y2="12" />
						<polyline points="12 19 5 12 12 5" /></svg
					>Back</NuxtLink
				>
				<div class="tag-container fade-in">
					<span v-for="tag in article.nottags.split('#')" :key="tag" class="badge"
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
							class="feather feather-tag"
						>
							<line x1="4" y1="9" x2="20" y2="9" />
							<line x1="4" y1="15" x2="20" y2="15" />
							<line x1="10" y1="3" x2="8" y2="21" />
							<line x1="16" y1="3" x2="14" y2="21" /></svg
						>{{ tag }}</span
					>
				</div>
				<h1 class="article-header fade-in">
					{{ article.title }}
				</h1>
				<span class="article-subtitle reveal-text"
					>{{ article.writtenat }} • {{ article.timetoread }} read</span
				>
				<hr class="article-seperator fade-in" />
				<div class="toc-container" v-if="!!article.toc.length">
					<h3>Table of Contents:</h3>
					<div class="toc-link-container">
						<ul>
							<li
								v-for="link of article.toc"
								:key="link.id"
								:class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
							>
								<NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
				<nuxt-content :document="article" class="fade-in" />
				<hr class="article-seperator fade-in" />
				<span class="article-subtitle fade-in">
					Published {{ article.writtenat }} by
					<span class="article-author"
						><a :href="'https://github.com/' + article.author">{{ article.author }}</a></span
					>
				</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content("articles", params.slug).fetch();
		article.writtenat = new Date(article.writtenat).toLocaleDateString();
		if (!article) {
			return error({ statusCode: 404, message: "Article not found" });
		}
		return { article };
	},
	head() {
		return {
			title: `Blog - xnacly`,
		};
	},
};
</script>
