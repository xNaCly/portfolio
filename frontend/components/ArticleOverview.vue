<!-- this shit doesnt work and i have no idea why - ps. fuck vue-->
<!-- fuck this tutorial, doesnt work: nuxtjs.org/tutorial/creating-blog-with-nuxt-content -->
<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article of posts" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div>
            <h2>{{ article.title }}</h2>
            <p>on: {{ article.os }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const posts = await this.$content()
      .only(["title", "description", "os", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      posts
    };
  },
  name: "ArticleOverview"
};
</script>
