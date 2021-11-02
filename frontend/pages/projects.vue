<template>
  <div>
    <Navbar />
    <div class="article-previews-container">
      <div
        v-for="project of projects"
        :key="project.title"
        class="article-preview"
      >
        <p class="article-preview-title reveal-text">
          <a :href="project.href" class="link link-flex">
            {{ project.title }}
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
              class="feather feather-external-link icon-project-header"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </p>
        <p class="article-preview-desc fade-in">
          {{ project.description }}
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content("projects")
      .only(["title", "description", "href"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      projects
    };
  }
};
</script>
