<template>
  <div>
    <Navbar />
    <article>
      <nuxt-content :document="article" />
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
