<template>
  <div>
    <Navbar />
    <div class="article-previews-container">
      <div>
        <div
          v-for="article of posts"
          :key="article.slug"
          class="article-preview"
        >
          <p class="article-preview-title primary-fg reveal-text">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="link link-flex"
            >
              <svg
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
                <path
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                />
              </svg>
              {{ article.title }}
            </NuxtLink>
          </p>
          <span class="article-preview-subtitle fade-in"
            >{{ article.writtenat }} • {{ article.timetoread }} read</span
          >
          <p class="article-preview-desc fade-in">
            {{ article.description }}
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("articles")
      .only(["title", "description", "writtenat", "slug", "timetoread"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      posts
    };
  },
  name: "ArticleOverview"
};
</script>
