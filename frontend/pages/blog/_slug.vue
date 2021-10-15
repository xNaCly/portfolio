<template>
  <div>
    <Navbar />
    <div class="article-container">
      <div class="article">
        <NuxtLink class="link" to="/blog"
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
            class="feather feather-corner-left-up"
          >
            <polyline points="14 9 9 4 4 9" />
            <path d="M20 20h-7a4 4 0 0 1-4-4V4" /></svg
          >../</NuxtLink
        >
        <div class="tag-container">
          <span
            v-for="tag in article.nottags.split('#')"
            :key="tag"
            class="badge"
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
              <path
                d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
              />
              <line x1="7" y1="7" x2="7.01" y2="7" /></svg
            >{{ tag }}</span
          >
        </div>
        <h1 class="article-header">
          {{ article.title }}
        </h1>
        <span class="article-subtitle"
          >{{ article.writtenat }} • {{ article.timetoread }} read</span
        >
        <hr class="article-seperator" />
        <nuxt-content :document="article" />
        <hr class="article-seperator" />
        <span class="article-subtitle">
          Published {{ article.writtenat }} by
          <span class="article-author"
            ><a :href="'https://github.com/' + article.author">{{
              article.author
            }}</a></span
          >
        </span>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  }
};
</script>
