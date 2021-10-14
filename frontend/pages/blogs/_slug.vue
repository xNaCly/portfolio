<template>
  <div>
    <Navbar />
    <article>
      <NuxtLink class="link" to="/blog">←../</NuxtLink>
      <h1 class="article-header">{{ article.title }}</h1>
      <span class="article-subtitle"
        >{{ article.writtenat }} - {{ article.timetoread }} read</span
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
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("", params.slug).fetch();
    return { article };
  }
};
</script>
