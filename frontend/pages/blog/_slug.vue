<template>
  <div>
    <Navbar />
    <div class="article-container">
      <div class="article">
        <NuxtLink class="link " to="/blog"
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
          >../</NuxtLink
        >
        <div class="tag-container fade-in">
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
        <div class="toc-container">
          <h2>Table of Contents:</h2>
          <div class="toc-link-container">
            <ul>
              <li v-for="link of article.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <h1 class="article-header fade-in">
          {{ article.title }}
        </h1>
        <span class="article-subtitle reveal-text"
          >{{ article.writtenat }} • {{ article.timetoread }} read</span
        >
        <hr class="article-seperator fade-in" />
        <nuxt-content :document="article" class="fade-in" />
        <hr class="article-seperator fade-in" />
        <span class="article-subtitle fade-in">
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
